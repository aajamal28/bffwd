import '../component/search-bar.js';
import '../component/user-list.js';
import {
    DataSource
} from '../data/source.js';

const search = () => {
    const searchElement = document.querySelector("search-bar");
    const userListElement = document.querySelector("user-list");

    const onSearchClicked = async() => {
        try {
            const result = await DataSource.findUser(searchElement.value);
            document.getElementById("result-text").innerHTML = `<h5 id="result-text" class="text-muted">result for ${searchElement.value} :</h5>`;
            renderResult(result);
        }catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        userListElement.users = results;
    };

    const fallbackResult = message => {
        userListElement.renderError(message);
        console.log(message);
    };

    searchElement.clickEvent = onSearchClicked;

};


const main = () => {
    const userListElement = document.querySelector("user-list");

    const mainView = async () => {
        try {
            const result = await DataSource.findUser("aajam");
            renderResult(result);
        }catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        userListElement.users = results;
    };

    const fallbackResult = message => {
        userListElement.renderError(message);
        console.log(message);
    };

    mainView();
}

export {
    main,
    search
}