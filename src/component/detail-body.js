import "../component/user-follower-list.js";
import { DataSource } from "../data/source.js";

class detailBody extends HTMLElement {
  set update(value) {
    this.login = value.login;
    this.name = value.name;
    this.location = value.location;
    this.company = value.company;
    this.follower = value.follower;
    this.following = value.following;
    this.url = value.url;
    this.avatar = value.avatar;
    this.repos = value.repos;
    this.render();
  }

  render() {
    const userFollowersElement = this.querySelector("user-follower");
    const userFollowingElement = document.querySelector("user-following");

    this.innerHTML = `
        <div class="row">
            <div class="col-md-4 col-12 text-center">
              <img class="img-fluid img-shadow" id="ImgUser" src="${this.avatar}" />
            </div>
            <div class="col-md-8 col-12 mt-5 ">
            <div class="row">
                <div class="col-md-8">
                    <div class="card card-primary">
                        <div class="card-body">
                            <h6 class="card-title">User information :</h6>
                            <p class="ms-5">Name : <strong>${this.name}</strong></p>
                            <p class="ms-5">Location : <strong>${this.location}</strong></p>
                            <p class="ms-5">Company : <strong>${this.company}</strong></p>
                            <p class="ms-5">Follower : <strong>${this.follower}</strong></p>
                            <p class="ms-5">Following : <strong>${this.following}</strong></p>
                            <p class="card-text ms-5"><a href ="${this.url}" target="_blank"><small class="text-muted">${this.url}</small></a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Public Repository :</h6>
                            <div class="text-center text-success mt-12">
                                <h1>${this.repos}<h1>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
              
          </div>
        
        `;

    const getUserFollowers = async (user) => {
      try {
        const result = await DataSource.getUserFollowers(user);
        renderFollower(result);
      } catch (message) {
        fallbackResult(message);
      }
    };

    // const getUserFollowing = async (user) => {
    //   try {
    //     const result = await DataSource.getUserFollowing(user);
    //     renderResult(result);
    //   } catch (message) {
    //     fallbackResult(message);
    //   }
    // };

    const renderFollower = (results) => {
      userFollowersElement.update = results ? results : 'NaN';
    };

    const fallbackResult = message => {
      console.log(message);
    };

    getUserFollowers(this.login);
  }
}

customElements.define("detail-body", detailBody);
