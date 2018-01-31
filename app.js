const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/getocode.js');

const argv = yargs
.options({
  address:{
  demanOption:true,alias:
  'a',
  describe:'Address to fetch'
  }
})
  .help()
  .alias("help","h")
  .argv;

geocode.geocodeAddress(argv.a,(errorMessage,results) => {
  //if errormessage is undefined then it treated it as false
  //if it is definded, then it treated it as true
  if (errorMessage) {
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        console.log(`the temperature is ${weatherResults.temperature} degrees, but it feels like it's ${weatherResults.apparentTemperature} degrees.`);
    })
    // console.log(results.address);
    // console.log(results.latitude);
    // console.log(results.longitude);
    // request({
    //   url:`https://api.darksky.net/forecast/54403f6bcab9b82fb21d3f6ba27a4656/${results.latitude}, ${results.longitude}`,
    //   json:true
    // }, (error, response, body) => {
    //   if (!error && body.code != 400) {
    //     const temperature = body.currently.temperature;
    //     const apparentTemperature = body.currently.apparentTemperature;
    //     const summary = body.currently.summary;
    //     const icon = body.currently.icon;
    //     const timezone = body.currently.timezone;
    //     console.log(`the temperature is ${temperature} degrees, but it feels like it's ${apparentTemperature} degrees.`);
    //     console.log(`You are in the ${timezone} timezone and it will be ${summary} with ${icon}`);
    //   } else {
    //     console.log(`unable to fetch temp`);
    //   }
      // console.log(("error: ", error));
      // console.log("body: ", JSON.stringify(body, undefined, 2));
    // })
  }
  // console.log(errorMessage);
  // console.log(results);
});
// const encodedAddress = encodeURIComponent(argv.a);
// const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
// location: {
// lat: 37.4357409,
// lng: -122.1556904
// },

// console.log("https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress&key=}");
// request({},() => )
// request({
//   url:/*`is the little thing under esc`*/`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
//   json:true
// },(error,response,body)=>{
//   const address =body.results[0].formatted_address;
//   const lagitude = body.results[0].geometry.location.lat;
//   const longitude = body.results[0].geometry.location.lng;
//   console.log("Address", address);
//   console.log("Latitude",lagitude);
//   console.log("Longitude",longitude);
//   // console.log(JSON.stringify(body.results[0].geometry.location,undefined,2));
// })
