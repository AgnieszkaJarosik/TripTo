const Fetch = {
  restaurants(term, location) {
    const url = `/restaurants?location=${location}&term=${term}`;
    return fetch(url)
      .then( resp => {
        return resp.json();
      })
      .then (jsonResp => {
        return jsonResp;
      })
      .catch( err => {
        return [];
      });
  },

  places(term, location) {
    const url = `/places?term=${term}&location=${location}`;
    return fetch(url)
      .then( resp => {
        return resp.json();
      })
      .then (jsonResp => {
        return jsonResp;
      })
      .catch( err => {
        return [];
      })
  },

  triposo( location ) {
    const url = `/info?&location=${location}`;
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