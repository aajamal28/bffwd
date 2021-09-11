class detailHeader extends HTMLElement {

  set update(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card-header">
        <h3 class="card-title text-success">${this._user}</h3>
    </div>
    `;
  }

}

customElements.define("detail-header", detailHeader);