import { AbstractTool } from "./AbstractTool.js"

export class Earser extends AbstractTool{

    constructor(capSize, color) {
        super(capSize,color)
        this.color = color || "white"
        this.capSize = capSize || 20
    }
}