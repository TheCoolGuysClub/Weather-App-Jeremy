const yargs = require(`yargs`);
const axios = require(`axios`);
const geocode = require(`./geocode/geopromise.js`);
const geoweather =require(`./weather/geoweather.js`)
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

  geocode.geocodeAddress(argv.a,(results,errorMessage)=>{
    console.log(results.address);
    if (errorMessage) {
      console.log(errorMessage);
     }
    else{
      geoweather.geoweather(results.lag,results.lng,(errorMessage) =>{

      });

     }

  });

  //     //   //sent get request to darksky
  //     //   // return axios,get()
  //      })
  // .catch((errorMessage)=>{
  // //Rejected from axios call to google api
  //   if(errorMessage.code ===`ENOTFOUND`){
  //     console.log(`unable to connect this url to google`);
  //   }
  // //we throw an error because that address does not exists
  //   else if(errorMessage.message){
  //     // console.log(error);
  //     console.log(`CAUGHT ERROR!`);
  //     console.log(errorMessage.message);
  //   }
  //   else{
  //     console.log(error);
  //   }
  // })
