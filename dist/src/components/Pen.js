import { AbstractTool } from "./AbstractTool.js";
export class Pen extends AbstractTool {
    constructor(capSize, color) {
        super(capSize, color);
        this.color = color || "black";
        this.capSize = capSize || 2;
    }
}
