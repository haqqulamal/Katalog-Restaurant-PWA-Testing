class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="banner">
      <img src="/images/heros/hero-image_1.jpg" alt="banner" />
    </div>
    `;
  }
}

customElements.define('jumbotron-elemen', Jumbotron);
