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

  }

});
