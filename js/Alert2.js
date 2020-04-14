class Alert2 extends Alert {
  constructor(a, c, d, icon) {
    super(a, c, d);
    this.icon = icon;
  }
  showIconAlert() {
    document.querySelector(
      this.out
    ).innerHTML = `<p class='${this.cssClass}'><i class="material-icons">${this.icon}</i>  ${this.message}</p>`;
  }
}
