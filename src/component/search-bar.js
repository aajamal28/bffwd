class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `
    <div class="row justify-content-center">
    <div class="col-12 col-md-10 col-lg-8">
        
            <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                    <i class="fas fa-search h4 text-body"></i>
                </div>
                <!--end of col-->
                <div class="col">
                    <input id="search-input" class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search username">
                </div>
                <!--end of col-->
                <div class="col-auto">
                    <button id="search-button" class="btn btn-lg btn-success" type="submit">Search</button>
                </div>
                <!--end of col-->
            </div>
        
    </div>
    <!--en
        `;

    this.querySelector("#search-button").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
