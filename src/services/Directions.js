const Directions = {
  directionsRenderer: null,

  initRenderer () {
    this.directionsRenderer = new window.google.maps.DirectionsRenderer();
  },

  getDirections (params)  {

      if(this.directionsRenderer){
        this.directionsRenderer.setMap(null);
      }
      const directionsService = new window.google.maps.DirectionsService();
      this.directionsRenderer = new window.google.maps.DirectionsRenderer();

      const calcRoute = () => {
        const request = {
          origin: params.start,
          destination: params.end,
          travelMode: 'DRIVING'
        };
        directionsService.route(request, (result, status) => {
          if (status == 'OK') {
            this.directionsRenderer.setDirections(result);
            console.log(result);
            return result;
          } else {
            console.log('request failed');
          }
        });
      }
      this.directionsRenderer.setMap(params.currMap);
      calcRoute(); 
  }
};

export default Directions;