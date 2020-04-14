const Fetch = {
  zomato(data) {
    const apiKey = process.env.REACT_APP_ZOMATO_KEY;
    const url = `https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/categories`;
    return fetch(url, {headers: {'user-key': apiKey} })
      .then( resp => {
        return resp.json();
      })
      .then (jsonResp => {
        console.log(jsonResp);
      })
      .catch( err => {
        console.log(err);
      });
  }
}
    
export default Fetch;