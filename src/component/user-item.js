import { DataSource } from "../data/source";

class UserItem extends HTMLElement {
  set user(user) {
    this._user = user;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .card {
          font-family: "Open Sans", sans-serif;
          cursor: pointer;
          border: 0;
        }

        .card-tile:hover {
          opacity: 0.7;
        }
      </style>

        <div class="card border-primary card-primary card-outline bg-light card-user" data-id="${this._user.login}">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${this._user.avatar_url}" class="p-2 mt-3 img-fluid img-rounded" alt="User-Github-Poster">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title text-success">${this._user.login}</h3>
              <p class="card-text"><a href ="${this._user.html_url}" target="_blank"><small class="text-muted">${this._user.html_url}</small></a></p>
              <hr/>
              </div>
          </div>
        </div>
      </div>
        `;

    // const cardUser = this.querySelector(".card-title");
    // cardUser.addEventListener("click", function () {
    //   //const userLogin = this.getAttribute("data-id");
    //   const userLogin = cardUser.innerHTML; 
    //   //alert(userLogin);
    //   const modal = new bootstrap.modal( document.getElementsByClassName('modal'));
    //   modal.modal('show');
    // });
  }
}

customElements.define("user-item", UserItem);
