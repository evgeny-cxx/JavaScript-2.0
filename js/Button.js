class Button {
    constructor(width, height, background, value) {
        this.width = width + 'px';
        this.height = height + 'px';
        this.background = background;
        this.value = value;
    }
    render() {
        let button = document.createElement("button");
        button.style.background = this.background;
        button.style.width = this.width;
        button.style.height = this.height;
        button.textContent = this.value;
        return button;
    }
}