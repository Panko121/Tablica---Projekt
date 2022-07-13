import { Earser } from './Earser.js';
import { Marker } from './Marker.js';
import { Square } from './Square.js';
import { Circle } from './Circle.js';
import { Pen } from './Pen.js';
import { Triangle } from './Triangle.js';

export interface Tool{
    drawing: boolean
    capSize: number
    color: string
}

export interface Figure{
    size:number
    color:string
}

export class ToolsF {
    earser: Tool
    marker: Tool
    pen: Tool
    square: Figure
    circle: Figure
    triangle: Figure
    constructor() {
        this.earser = new Earser(20, 'white');
        this.marker = new Marker(5, 'red');
        this.square = new Square(100, 'green');
        this.circle = new Circle(20, 'brown');
        this.pen = new Pen(2, "black");
        this.triangle = new Triangle(2,'black');
    }

    getTool(tool) {
        switch (tool) {
            case 'earser':
                return this.earser;
            case 'marker':
                return this.marker;
            case 'square':
                return this.square;
            case 'circle':
                return this.circle;
            case 'pen':
                return this.pen;
            case 'triangle':
                return this.triangle;
        }
    }

    colorChange(color){
        this.marker.color = color
        this.earser.color = 'white'
        this.square.color = color
        this.circle.color = color
        this.pen.color = color
        this.triangle.color = color
    }

    sizeChange(size){
        this.marker.capSize = size;
        this.earser.capSize = size;
        this.pen.capSize = size;
        this.square.size = size;
        this.circle.size = size;
        this.triangle.size = size;
    }

}