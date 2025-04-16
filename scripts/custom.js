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
      <footer><strong>Website last updated 15.04.2025</strong></footer>
      `;
  }
}
customElements.define('footer-js', Footer);

class Stub extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `<div class="stub"><div><img src="images/stub.png" alt=""></div><div><p><strong>This page/section is a stub.</strong></p><p>I'm doing my best to fill it in as quick as I can, please bear with me.</p></div></div>`
  }
}
customElements.define("div-stub", Stub)

class ChaosStub extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `<div class="stub"><div><img src="images/chaos.png" alt=""></div><div><p><strong>This page/section is under the control of Chaos.</strong></p><p>This part of lore belongs to my friend and is more likely to be outdated or miss details.</p></div></div>`
  }
}
customElements.define("div-chaos", ChaosStub)

class RoleplayStub extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
    this.innerHTML = `<div class="stub"><div><img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-768x576.jpg" alt=""></div><div><p><strong>This section has arguable canonicity.</strong></p><p>Characters or events mentioned here are from a sequel roleplay and I'm not sure if I want it to be canon</p></div></div>`
  }
}
customElements.define("div-rp", RoleplayStub)