export class CircleGif {
    // 构造函数
    constructor(canvas) {
        // 画布对象
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')

        // 宽高
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.canvas.style.width = this.width
        this.canvas.style.height = this.height

        // 画布宽高需乘以当前显示设备的物理像素分辨率与CSS像素分辨率之比
        let ratio = this.getRatio()
        this.canvas.width = this.width * ratio
        this.canvas.height = this.height * ratio

        this.context.scale(ratio, ratio)

        // 旋转角度
        this.rotate = Math.PI / 2.3;
    }

    // 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
    getRatio() {
        let context = this.context;
        if (context == null) {
            return 1;
        }
        let backingStore = context.backingStorePixelRatio
            || context.webkitBackingStorePixelRatio
            || context.mozBackingStorePixelRatio
            || context.msBackingStorePixelRatio
            || context.oBackingStorePixelRatio
            || context.backingStorePixelRatio
            || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }

    // 开始
    start() {
        let startAngle1 = 0;
        let startAngle2 = 0;
        let startAngle3 = 0;
        let startAngle4 = 0;
        let startAngle5 = 0;
        // 定时任务
        let time0 = new Date().getTime()
        let run = () => {
            let time1 = new Date().getTime()
            if (time1 - time0 < 16) {
                requestAnimationFrame(run)
                return
            }
            time0 = time1
            // 清空画布
            this.context.clearRect(0, 0, this.width, this.height)
            // 绘制
            this.draw1(startAngle1);
            this.draw2(startAngle4);
            this.draw3();
            this.draw4(startAngle5);
            this.draw5(startAngle4);
            this.draw6(startAngle1);
            this.draw7(startAngle5);
            this.draw8();
            this.draw9(startAngle3);
            this.draw10(startAngle3);
            this.draw11(startAngle2);

            // 旋转的角度，值越大转的越快
            startAngle1 -= 0.015;
            startAngle2 += 0.01;
            startAngle3 += 0.02;
            startAngle4 += 0.015;
            startAngle5 -= 0.02;
            requestAnimationFrame(run)
        }
        requestAnimationFrame(run)
    }

    // 由内向外
    draw1(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();

        let r1 = this.height / 3.6;
        let center = { x: this.width / 2, y: this.height / 1.5 * 0.6 + 30 };

        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#00e9ff';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 + 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 - 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = '#cedbe4';
        let k1 = 3 * Math.PI / 180;
        ctx.lineWidth = 20;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 5) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw2(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (6 * 0.6) - 10;

        let center = { x: this.width / 2, y: this.height / 1.5 * 0.6 + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#cedbe4';
        let k1 = 1 * Math.PI / 180;
        ctx.lineWidth = 3;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw3(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (6 * 0.6) + 40;

        let center = { x: this.width / 2, y: this.height / 1.5 * 0.6 + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#00c6e4';
        ctx.lineWidth = 18;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = '#10489d';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 + 28, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = '#00c6e4';
        let k1 = 18 * Math.PI / 180;
        let k2 = 2 * Math.PI / 180;
        let k3 = 8 * Math.PI / 180;
        let k4 = 2 * Math.PI / 180;
        ctx.lineWidth = 12;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1 + 12, k, k + k1);
            ctx.stroke();
            k += k1 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1 + 12, k, k + k3);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw4(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (3 * 0.6) - 4;

        let center = { x: this.width / 2, y: this.height / 1.5  * 0.6 + 20 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#22eefe';
        ctx.lineWidth = 4;
        let k1 = 1 * Math.PI / 180;
        let k2 = 10 * Math.PI / 180;
        let k3 = 1 * Math.PI / 180;
        let k4 = 18 * Math.PI / 180;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k1);
            ctx.stroke();
            k += k1 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k3);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw5(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (2.5 * 0.6) - 10;

        let center = { x: this.width / 2, y: this.height / 1.7 * 0.6  + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#cedbe4';
        let k1 = 1 * Math.PI / 180;
        ctx.lineWidth = 3;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw6(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (2.5 * 0.6);

        let center = { x: this.width / 2, y: this.height / 1.7 * 0.6 + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        // ctx.strokeStyle = '#00e9ff';
        ctx.strokeStyle = 'rgba(0, 198, 228,0.7)';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 + 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 - 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = '#cedbe4';
        let k1 = 3 * Math.PI / 180;
        ctx.lineWidth = 20;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 5) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw7(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (2.5 * 0.6) - 4;

        let center = { x: this.width / 2, y: this.height / 1.7 * 0.6 + 24 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        // ctx.strokeStyle = '#22eefe';
        ctx.strokeStyle = 'rgba(0, 198, 228, 0.7)';
        ctx.lineWidth = 4;
        let k1 = 1 * Math.PI / 180;
        let k2 = 10 * Math.PI / 180;
        let k3 = 1 * Math.PI / 180;
        let k4 = 18 * Math.PI / 180;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k1);
            ctx.stroke();
            k += k1 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k3);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw8(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (2.5 * 0.6) + 40;

        let center = { x: this.width / 2, y: this.height / 1.7 * 0.6  + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        // ctx.strokeStyle = '#00c6e4';
        ctx.strokeStyle = 'rgba(0, 198, 228, 0.7)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1, 0, Math.PI * 2);
        ctx.stroke();
        // ctx.strokeStyle = '#10489d';
        ctx.strokeStyle = 'rgba(18, 122, 180,0.7)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r1 + 28, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = 'rgba(0, 198, 228, 0.7)';
        let k1 = 18 * Math.PI / 180;
        let k2 = 2 * Math.PI / 180;
        let k3 = 8 * Math.PI / 180;
        let k4 = 2 * Math.PI / 180;
        ctx.lineWidth = 6;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1 + 6, k, k + k1);
            ctx.stroke();
            k += k1 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1 + 6, k, k + k3);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw9(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / 2.5 / 0.6;
        let center = { x: this.width / 2, y: this.height / 1.8 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#127ab4';
        ctx.lineWidth = 4;
        let k1 = 20 * Math.PI / 180;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    draw10(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.height / (2 * 0.6);

        let center = { x: this.width / 2, y: this.height / 1.7 * 0.6  + 30 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        // ctx.strokeStyle = '#127ab4';
        ctx.strokeStyle = 'rgba(18, 122, 180,0.7)';
        ctx.lineWidth = 4;
        let k1 = 20 * Math.PI / 180;
        // let k2 = 10 * Math.PI / 180;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }
    // 最上层大圈
    draw11(startAngle = 0) {
        let ctx = this.context;
        if (!ctx) {
            return;
        }
        ctx.save();
        let r1 = this.width / 2.3;
        let center = { x: this.width / 2, y: this.height / 2 - 10 };
        ctx.transform(1, 0, 0, Math.cos(this.rotate), 0, center.y - center.y * Math.cos(this.rotate));
        ctx.strokeStyle = '#00e9ff';
        ctx.lineWidth = 4;
        let k1 = Math.PI / 180;
        let k2 = 1.5 * Math.PI / 180;
        let k3 = 15 * Math.PI / 180;
        for (let s = startAngle; s < startAngle + Math.PI * 2; s += Math.PI / 6) {
            let k = s;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, s, k + k1);
            ctx.stroke();
            k += k1 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k3);
            ctx.stroke();
            k += k3 + k2;
            ctx.beginPath();
            ctx.arc(center.x, center.y, r1, k, k + k1);
            ctx.stroke();
        }
        ctx.restore();
    }

}
