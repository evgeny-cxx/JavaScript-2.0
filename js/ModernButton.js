class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = Math.round(borderRadius) + 'px';

    }
    // set borderRadius(borderRadius) {
    //     if (borderRadius < 0 || !Number.isInteger(borderRadius)) throw new Error("не целое число!");
    //     this._borderRadius = borderRadius + 'px';
    // }
    // get borderRadius() {
    //     return this._borderRadius;
    // }
    render() {

        let button = document.createElement("button");
        button.style.background = this.background;
        button.style.width = this.width;
        button.style.height = this.height;
        button.textContent = this.value;
        button.style.borderRadius = 0;
        button.style.borderRadius = this.borderRadius;
        return button;
    }
}