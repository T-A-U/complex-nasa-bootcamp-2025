//Done With help from Justin
//we want to get the location from the api using a function
//we want to display those locations and names in the dom 
//might need to convert the locations to use them in the weather API
//Lastly we want to fetch the WEATHER for a specific location

//Adding  an onclick to the button to activate this function to get locations of all facilities.
document.querySelector('button').addEventListener('click',getFacilityLocations )
function getFacilityLocations(){
    const nasaUrl = `https://corsproxy.io/?url=https://data.nasa.gov/docs/legacy/gvk9-iz74.json`

    fetch(nasaUrl)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data[i]) //changed data[0] to data[i]
    // data.forEach((element), i => {
    //     data.forEach((i) => {   

    //    //weather fetch will be inside here to get all weathers for all places 
    // });

    for (let i = 0; i < data.length; i++) {
       data[i].center
       data[i].location.latitude
       data[i].location.longitude
      }   


        let locationInfo = data[i].location.latitude
        let locationInfoTwo =data[i].location.longitude
        document.querySelector('.info').innerText=`The latitude and longitude of ${data[i].city} is ${locationInfo},${locationInfoTwo}`
        //loop through all indexes and place in dom

           
            // document.querySelector('p').innerText=data.quote
            
//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0e904a2a7aacc8772e00052c29bf80c8`
        
           


           

})
.catch(err => {
    console.log(`error ${err}`)
});

}

//Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently. 