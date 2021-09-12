class AppBar extends HTMLElement {

    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">GitBook Apps</a>
  
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              
            </ul>
          </div>
        </div>
      </nav>
      `;
    }
  }
  
  customElements.define("app-bar", AppBar);