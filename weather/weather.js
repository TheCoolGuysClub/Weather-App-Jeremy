const request = require('request');

const weatherResults=(lag,long,callback)=>{
  // location: {
  // lat: 37.4357409,
  // lng: -122.1556904
  // },

  request({

    url:`https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lag},${long}`,
    json:true
    },
    (error,response,body)=>{
      if (!error && body.code != 400){
        const temperature = body.currently.temperature;
        const apparentTemperature = body.currently.apparentTemperature;
        const visibility = body.currently.visibility;
        const nearestStormDistance = body.currently.nearestStormDistance;
        const icon = body.currently.icon;
        const moonPhase = body.daily.data[0].moonPhase;
        // const date = new Date.now();
        const year = new Date().getFullYear();
        const month = new Date().getMonth()+1;
        const day = new Date().getDate();
        const hour = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        console.log(`The temperature is ${temperature} degrees right now, but it feels like it's ${apparentTemperature} degrees`);
        console.log(`the visibility is ${visibility}`);
        console.log(`the nearest storm is about ${nearestStormDistance} miles away`);
        console.log(`The current date is ${month}/${day}/${year},the time is ${hour}:${min}:${sec}`);
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

        if (moonPhase === 0) {
          console.log("New Moon 🌑");
        } else if (moonPhase > 0 && moonPhase < 0.25) {
          console.log("Waxing Crescent 🌒 ");
        } else if (moonPhase === 0.25) {
          console.log("first quarter 🌓");
        } else if (moonPhase > 0.25 && moonPhase < 0.5) {
          console.log("Waxing Gibous 🌔");
        } else if (moonPhase === 0.5) {
          console.log("It's a full moon!!!! 🌕");
        } else if (moonPhase > 0.5 && moonPhase < 0.75) {
          console.log("Waning Gibbous 🌖 ");
        } else if (moonPhase === 0.75) {
          console.log("Last quarter 🌗 ");
        } else if (moonPhase > 0.75 && moonPhase < 1) {
          console.log("Waning Crescent 🌘");
        } else if (moonPhase === 1) {
          console.log("New Moon 🌑");
        } else {
          console.log("no moon phase found");
        }
        // console.log(`The sun is up for ${sunriseTime} seconds! And will set in ${sunsetTime} seconds!`);
      }
  else {
        console.log("Unable to fetch temperature");
      }
  })
  //



}
module.exports={
  weatherResults
}
