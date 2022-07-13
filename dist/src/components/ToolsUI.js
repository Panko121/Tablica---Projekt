export class ToolsUI {
    constructor(container) {
        this.subscribers = [];
        const root = this.createRoot();
        this.createButtons(root);
        this.attachToContainer(container, root);
        this.subscribers = [];
    }
    createRoot() {
        const root = document.createElement('div');
        root.classList.add('flex', 'flex-column');
        return root;
    }
    createButtons(root) {
        root.appendChild(this.createButton('Earser', 'earser'));
        root.appendChild(this.createButton("Pen", 'pen'));
        root.appendChild(this.createButton("Marker", 'marker'));
        root.appendChild(this.createButton('Square', 'square'));
        root.appendChild(this.createButton('Circle', 'circle'));
        root.appendChild(this.createButton('Triangle', 'triangle'));
    }
    attachToContainer(container, root) {
        document.querySelector(container).appendChild(root);
    }
    createButton(name, selector) {
        const btn = document.createElement('button');
        btn.setAttribute('data-tool', selector);
        btn.textContent = name;
        btn.addEventListener('click', () => {
            this.subscribers.forEach(s => s(selector));
        });
        return btn;
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
}
