export class ChangeColor {
    constructor() {
        this.colors = [];
    }
    returnColor(div) {
        return console.log(window.getComputedStyle(div).backgroundColor);
    }
}
