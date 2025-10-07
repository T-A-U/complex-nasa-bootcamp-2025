//Done With help from Justin
//we want to get the location from the api using a function
//we want to display those locations and names in the dom
//might need to convert the locations to use them in the weather API
//Lastly we want to fetch the WEATHER for a specific location

//Adding  an onclick to the button to activate this function to get locations of all facilities.
document
  .querySelector("button")
  .addEventListener("click", getFacilityLocations);
function getFacilityLocations() {
  const nasaUrl = `https://corsproxy.io/?url=https://data.nasa.gov/docs/legacy/gvk9-iz74.json`;

  fetch(nasaUrl)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      //changed data[0] to data[i]
      // data.forEach((element), i => {
      //     data.forEach((i) => {
      var i;
      //    //weather fetch will be inside here to get all weathers for all places
      // });
      const APIKEY = "207f1d25d1ac455b8ac21435250710";

      for (let i = 0; i < data.length; i++) {
        const facility =data[i].facility;
        const lat =data[i].location.latitude;
        const lon =data[i].location.longitude;

        weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0e904a2a7aacc8772e00052c29bf80c8`

        console.log(data[i]);
        fetch(weather)
          .then((res) => res.json()) // parse response as JSON
          .then((data) => {
            document.querySelector('div').innerHTML += `<div>${facility} || ${lat} ${lon} || Temp: ${(((data.main.temp -273.15) *1.8) + 32).toFixed(0) }</div>` //help from Justin 
          });
      }
      let locationInfo = data[i].location.latitude;
      let locationInfoTwo = data[i].location.longitude;
      document.querySelector(
        ".info"
      ).innerText = `The latitude and longitude of ${data[i].city} is ${locationInfo},${locationInfoTwo}`;
      //loop through all indexes and place in dom

      // document.querySelector('p').innerText=data.quote

      //`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0e904a2a7aacc8772e00052c29bf80c8`
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently.
