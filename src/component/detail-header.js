class detailHeader extends HTMLElement {
  set update(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card-header d-flex justify-content-between">
        <h2 class="card-title text-success">${this._user}</h2>
        <button id="backToMain" class="btn btn-outline-primary rounded-pill"><i class="fa fa-arrow-left"></i> Back</button>
    </div>
    `;

    $('#backToMain').click(function() {
      //$('main').show();
      //$('.detailUser').hide();

      const mainPage = document.querySelector('main');
      mainPage.style.display = "block";
      const detailPage = document.querySelector('#detailUser');
      detailPage.style.display = "none";
  });
  }
}

customElements.define("detail-header", detailHeader);
