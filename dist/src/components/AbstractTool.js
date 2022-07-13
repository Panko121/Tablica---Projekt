export class AbstractTool {
    constructor(capSize, color) {
        this.drawing = false;
        this.capSize = capSize || 5;
        this.color = color || 'black';
    }
    onMouseMove(x, y, ctx) {
        if (this.drawing) {
            ctx.lineWidth = this.capSize;
            ctx.lineCap = 'round';
            ctx.strokeStyle = this.color;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
    onMouseUp(x, y, ctx) {
        this.drawing = false;
        ctx.beginPath();
    }
    onMouseDown(x, y, ctx) {
        if (!this.drawing) {
            this.drawing = true;
        }
    }
}
