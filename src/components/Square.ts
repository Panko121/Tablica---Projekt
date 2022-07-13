import { AbstractFigure } from "./AbstractFigure.js"

export class Square extends AbstractFigure{

    constructor(size, color) {
        super(size, color)
        this.color = color || "green"
        this.size = size || 100
    }
}
