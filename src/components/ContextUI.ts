export class ContextUI {
    context: any
    constructor(container) {
        this.context = document.createElement('div')
        this.context.innerHTML = 'Hello 👋 <br><br> Please select a tool ✍'
        document.querySelector(container).appendChild(this.context)
    }

    updateContext(tool) {
        this.context.textContent = this.formatText(tool)
    }

    formatText(tool) {
        switch (tool) {
            case 'earser':
                return `Selected tool - Earser 🔸`;
            case 'marker':
                return `Selected tool - Marker 🖍`;
            case 'square':
                return `Selected figure - Square 🔲`;
            case 'circle':
                return `Selected figure - Circle ⚪`;
            case 'pen':
                return `Selected tool - Pen ✎`;
            case 'triangle':
                return `Selected figure - Triangle 🔺`;
        }
    }

}