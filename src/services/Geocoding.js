const Geocoding = {
    findLatLang(address, map) {
      const geocoder = new window.google.maps.Geocoder();
      return new Promise(function(resolve, reject) {
        geocoder.geocode({ 'address': address }, function (results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            map.setZoom(10);
            new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: map,
              title: address
            });
            resolve({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()});
          } else {
            reject(new Error('Couldnt\'t find the location ' + address));
          }
        })
      })
    }
}

export default Geocoding;
