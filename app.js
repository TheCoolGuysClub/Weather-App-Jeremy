const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/getocode.js');
const geoweather = require('./weather/weather.js');
const argv = yargs
.options({
  address:{
  demandOption:true,
  alias:'a',
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
   }
   else{
     geoweather.weatherResults(results.lagitude,results.longitude,(errorMessage) =>{
       console.log(`The temperature is ${results.temperature} degrees, but it feels like ${results.apperntTemperature} degrees`);
       console.log("Error: ",error);
       console.log("body: ",JSON.stringify(body,undefined,2));
     } );

    console.log(results.address);
  //   console.log(results.lagitude);
  //   console.log(results.longitude);
  //     request({
  //       url:`https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${results.lagitude},${results.longitude}`,
  //       json:true
  //     },(error,response,body)=>{
  //       if (!error &&body.code != 400){
  //       const temperature = body.currently.temperature;
  //       const apperntTemperature = body.currently.apparentTemperature;
  //       console.log(`The temperature is ${temperature} degrees, but it feels like ${apperntTemperature} degrees`);
  //     }
  //     else {
  //       console.log("Unable to fetch temperature");
  //     }
  //     })

      // console.log("Error: ",error);
      // console.log("body: ",JSON.stringify(body,undefined,2));}
  }

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
