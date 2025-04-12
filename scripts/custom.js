// NAVBAR

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("added navbar");
    this.innerHTML = `
        <!-- Side navigation -->
        <div class="sidenav">
        <div class="imagehere" style="background-image: url('https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-768x576.jpg')"></div><br>
        <h2>UNALTERED
        Lore Wiki</h2>
          <a href="index.html">Home</a>
          <a href="worldtemplate.html">Placeholder</a>
          <a href="worldtemplate.html">Placeholder</a>
          <a href="worldtemplate.html">Placeholder</a>
          <a href="miscellaneous.html">Miscellaneous</a>
        </div>
    `;
  }
}
customElements.define('header-component', Header);

//FOOTER

class Footer extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    console.log("added footer");
    this.innerHTML = `
      <footer><strong>Last Updated 12.04.2025</strong></footer>
      `;
  }
}
customElements.define('footer-js', Footer);
