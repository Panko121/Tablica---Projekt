import { AbstractFigure } from "./AbstractFigure.js";
export class Triangle extends AbstractFigure {
    constructor(size, color) {
        super(size, color);
        this.w1 = 60;
        this.w2 = 90;
        this.color = color || "black";
        this.size = size || 2;
    }
    onMouseDown(x, y, ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - this.w1, y + this.w2);
        ctx.moveTo(x - this.w1, y + this.w2);
        ctx.lineTo(x + this.w1, y + this.w2);
        ctx.moveTo(x + this.w1, y + this.w2);
        ctx.lineTo(x, y);
        ctx.moveTo(x, y);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath(x, y);
        ctx.closePath(x, y);
    }
}
