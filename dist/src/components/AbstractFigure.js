export class AbstractFigure {
    constructor(size, color) {
        this.size = size || 20;
        this.color = color || 'red';
    }
    onMouseMove(x, y, ctx) {
    }
    onMouseUp(x, y, ctx) {
    }
    onMouseDown(x, y, ctx) {
        ctx.strokeStyle = this.color;
        ctx.strokeRect(x - this.size / 2, y - this.size / 2, this.size, this.size);
        ctx.closePath();
    }
}
