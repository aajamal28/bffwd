const url = "https://api.github.com/";
const token_key = "token e23f1a67d60230d11eb88b0083e8d2c3341f3708";
const myHeaders = new Headers({
  "User-Agent": "request",
  Authorization: `${token_key}`,
});

class DataSource {
  static findUser(searchKey) {
    return fetch(`${url}search/users?q=${searchKey}`, {
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.total_count !== 0) {
          return Promise.resolve(responseJson.items);
        } else {
          return Promise.reject(`${searchKey} is not found`);
        }
      });
  }
  
  static getUserDetail(user) {
    return fetch(`${url}users/${user}`, {
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
      } else {
          return Promise.reject(`${user} is not found`)
      }
      });
  }
}

export { DataSource };
