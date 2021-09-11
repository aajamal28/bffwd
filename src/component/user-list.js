import './user-item.js'

class UserList extends HTMLElement {
    set users (users) {
        this._users = users;
        console.log(users);
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

customElements.define("user-list", UserList);