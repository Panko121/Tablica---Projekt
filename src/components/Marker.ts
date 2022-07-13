import { AbstractTool } from "./AbstractTool.js"

export class Marker extends AbstractTool{

    constructor(capSize, color) {
        super(capSize,color)
        this.color = color || "red"
        this.capSize = capSize || 5
    }
}