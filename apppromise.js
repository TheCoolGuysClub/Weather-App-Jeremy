const yargs = require(`yargs`);
const axios = require(`axios`);
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
  const encodedAddress = encodeURIComponent(argv.address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
  axios.get(geocodeUrl)
  .then((response)=>{
    if(response.data.status ==="ZERO_RESULTS"){
      throw new Error(`Unable to find that address`);
    }
    else{
      const lng = response.data.results[0].geometry.location.lng;
      const lat = response.data.results[0].geometry.location.lat;
      console.log(response.data.results[0].formatted_address);
      const wethercodeURL = `https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lat},${lng}`;
      axios.get(wethercodeURL)
      .then((response)=>{
        if(response.data.status ==="ZERO_RESULTS"){
          throw new Error(`Unable to find that address`);
        }
        else{
          const timezone = response.data.timezone;
          const temperature = response.data.currently.temperature;
          const aptemperature = response.data.currently.apparentTemperature;
          const visibility = response.data.currently.visibility;
          const icon = response.data.currently.icon;
          // const moonPhase = response.data.daily.data[0].moonPhase;
          // console.log(moonPhase);
          const year = new Date().getFullYear();
          const month = new Date().getMonth()+1;
          const day = new Date().getDate();
          const hour = new Date().getHours();
          const min = new Date().getMinutes();
          const sec = new Date().getSeconds();
          console.log( `The temperature is ${temperature}, but it feels like ${aptemperature}`);
          console.log(`You are in the ${timezone} timezone`);
          console.log(`The current date is ${month}/${day}/${year}, and the time is ${hour}:${min}:${sec}`);
          if (icon === "clear-day") {
            console.log(`It's currently sunny ☀️`);
          } else if (icon === "partly-cloudy-day") {
            console.log(`It's currently partly cloudy ⛅`);
          } else if (icon === "clear-night"){
            console.log(`It's currently a clear night 🌃`);
          } else if (icon === "rain"){
            console.log(`It's currently raining 🌧️`);
          } else if (icon === "snow"){
            console.log(`It's currently snowing ❄️`);
          } else if (icon === "sleet"){
            console.log(`There is currently sleet 🌨`);
          } else if (icon === "wind") {
            console.log(`It's currently very windy 🌬️`);
          } else if (icon === "fog") {
            console.log(`It's currently foggy 🌁`);
          } else if (icon === "cloudy") {
            console.log(`It's currently cloudy ☁️`);
          } else if (icon === "partly-cloudy-night") {
            console.log(`It's currently party cloudy at night 🌌`);
          } else {
            console.log(`It's currently ${icon}`);
          }

          // if (moonPhase === 0) {
          //   console.log("New Moon 🌑");
          // } else if (moonPhase > 0 && moonPhase < 0.25) {
          //   console.log("Waxing Crescent 🌒 ");
          // } else if (moonPhase === 0.25) {
          //   console.log("first quarter 🌓");
          // } else if (moonPhase > 0.25 && moonPhase < 0.5) {
          //   console.log("Waxing Gibous 🌔");
          // } else if (moonPhase === 0.5) {
          //   console.log("It's a full moon!!!! 🌕");
          // } else if (moonPhase > 0.5 && moonPhase < 0.75) {
          //   console.log("Waning Gibbous 🌖 ");
          // } else if (moonPhase === 0.75) {
          //   console.log("Last quarter 🌗 ");
          // } else if (moonPhase > 0.75 && moonPhase < 1) {
          //   console.log("Waning Crescent 🌘");
          // } else if (moonPhase === 1) {
          //   console.log("New Moon 🌑");
          // } else {
          //   console.log("no moon phase found");
          // }
              // console.log("┻━┻ミ＼(≧ﾛ≦＼)");
        }
      })
    }

  })

  .catch((error)=>{
    if(error.code ===`ENOTFOUND`){
      console.log(`unable to connect  to google`);
    }
    else if(error.message){
      console.log(error);
      console.log(`ERROR FOUND!`);
      console.log(error.message);
    }
    else{
      console.log(error);
    }
  })

// const yargs = require('yargs');
// const axios = require('axios');
//
// const argv = yargs
// .options({
//   address:  {
//   demandOption:true,
//   alias:'a',
//   describe:'Address to fetch'
//   }
// }).help()
// .alias("help", 'h')
// .argv;
//
// const encodedAddress = encodeURIComponent(argv.address);
// const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
// const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`
// axios.get(geocodeURL)
//   .then ((response) => {
//     // console.log(response);
//     if (response.body.status = "ZERO_RESULTS") {
//       throw new Error("unable to find that address");
//     }
//     //send get request to darksky
//     //return axios.get()
//   })
//   .then((response) => {
//
//   })
//   .catch((e) => {
//     if (e.code === 'ENOTFOUND') {
//       //rejected from axios cal to google api
//       console.log("unable to connect with google");
//       //we threw an erro cuz that address doesn't exist
//     } else if (e.message) {
//       console.log("caught error");
//       console.log(e.message);
//     }
//
//   })
