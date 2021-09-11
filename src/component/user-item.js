import '../component/detail-header';
import '../component/detail-body';
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
              <h3 class="card-title text-success mt-4">${this._user.login}</h3>
              
              <hr/>
              </div>
          </div>
        </div>
      </div>
        `;

    const loaderElement = document.querySelector("#loader-text");
    loaderElement.style.display = "none";

    const detailGitlUser = async (user) => {
      loaderElement.style.display = "block";
      try {
        const result = await DataSource.getUserDetail(user);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = res => {
      loaderElement.style.display = "none";
      console.log(res);
      $('main').hide();
      $('#detailUser').show();

      //$('#ImgUser').attr('src', res.avatar_url);

      const dtHeader = document.querySelector("detail-header");
      dtHeader.update = res.login;

      const dtBody = document.querySelector("detail-body");
      const dataBody = {
        'login' : res.login,
        'name' : res.name,
        'location' : res.location,
        'company' : res.company,
        'follower' : res.followers,
        'following' : res.following,
        'url' : res.html_url,
        'repos' : res.public_repos,
        'avatar' : res.avatar_url
      };
      dtBody.update = dataBody;
    };

    const fallbackResult = message => {
      loaderElement.style.display = 'none';
      alert(message);
  };

    const cardItem = this.querySelector('.card-user');
    cardItem.addEventListener("click", function() {
      detailGitlUser(this.getAttribute('data-id'));
    });


  }
}

customElements.define("user-item", UserItem);
