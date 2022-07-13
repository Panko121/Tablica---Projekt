import { AbstractFigure } from "./AbstractFigure.js";
export class Circle extends AbstractFigure {
    constructor(size, color) {
        super(size, color);
        this.color = color || "brown";
        this.size = size || 20;
    }
    onMouseDown(x, y, ctx) {
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.beginPath(x, y);
        ctx.closePath(x, y);
    }
}
