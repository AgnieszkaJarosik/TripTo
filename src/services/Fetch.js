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
  },

  yelp(term, location) {
    const apiKey = process.env.REACT_APP_YELP_KEY;
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
    return fetch(url, {headers: {Authorization: `Bearer ${apiKey}`} })
      .then( resp => {
        return resp.json();
      })
      .then( jsonResponse => {
        if(jsonResponse.businesses) {
          console.log(jsonResponse);
          return jsonResponse.businesses.map( place => place )}
      })
      .catch( e => {
        console.log(e);
        return [];
      })
  },

  triposo( location ) {
    const accountId = process.env.REACT_APP_ACCOUNT_ID;
    const apiKey = process.env.REACT_APP_TRIPOSO_API;
    const url = `https://www.triposo.com/api/20200405/location.json?&id=${location}&fields=all&account=${accountId}&token=${apiKey}`;
    return fetch(url)
      .then( r => {
        return r.json();
      })
      .then( rjson => {
        return rjson;
      })
      .catch( err => {
        console.log(err);
      })
  },

  mediaWiki(place){
    // const url = `https://cors-anywhere.herokuapp.com/https://pl.wikipedia.org/w/api.php?action=query&list=search&srsearch=${place}&format=json`;
    // const url2 = `https://cors-anywhere.herokuapp.com/https://pl.wikipedia.org/w/api.php?action=query&prop=revisions&titles=${place}&rvslots=*&rvprop=content&format=json`;

    //   return fetch(url2)
    //   .then( r => {
    //     return r.json();
    //   })
    //   .then( rjson => {
    //     const value = Object.values(rjson.query.pages);
    //     const info = value[0].revisions[0].slots.main["*"];
    //     return info;
    //   })
    //   .catch( err => {
    //     console.log(err);
    //   });

    const url = `https://cors-anywhere.herokuapp.com/https://pl.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${place}`;
    return fetch(url)
      .then( resp => {
        return resp.json();
      })
      .then( jsonResp => {
        const value = Object.values(jsonResp.query.pages);
        const info = value[0].extract;
        return info;
      })
      .catch(err => {
        console.log(err);
      });
  },
  
  wikiImg(place){
    const url = `https://cors-anywhere.herokuapp.com/https://pl.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=${place}`;
    return fetch(url)
      .then( r => {
        return r.json();
      })
      .then( respJson => {
        console.log(respJson);
        const value = Object.values(respJson.query.pages);
        return value[0].images.map( img => img.title);
      })
      .catch(err=>{
        console.log(err);
      })
  }
}
    
export default Fetch;