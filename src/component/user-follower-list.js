import './user-item.js'

class UserFollowerList extends HTMLElement {
    set update (users) {
        this._users = users;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._users.forEach(user => {
            const userItemElement = document.createElement("user-item");
            userItemElement.user = user;
            this.appendChild(userItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${message}</strong>. Please search with another keyword!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `;
    }
}

customElements.define("user-follower", UserFollowerList);