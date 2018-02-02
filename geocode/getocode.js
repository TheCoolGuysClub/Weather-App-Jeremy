const request = require('request');

const geocodeAddress= (address,callback)=>{
  const encodedAddress = encodeURIComponent(address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  // location: {
  // lat: 37.4357409,
  // lng: -122.1556904
  // },

  // console.log("https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress&key=}");
  // request({},() => )
  request({
    url:/*`is the little thing under esc`*/`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
    json:true
  },(error,response,body)=>{
    if(body.status ==="ZERO_RESULTS"){
      // console.log("This address does not exists");
      callback("This address does not exists",undefined);
    }else if (body.status ==="OK"){
      callback(undefined,{
        address:body.results[0].formatted_address,
        lagitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      })
    }
    // console.log(JSON.stringify(body , undefined , 2));


    // const address =body.results[0].formatted_address;
    // const lagitude = body.results[0].geometry.location.lat;
    // const longitude = body.results[0].geometry.location.lng;
    // console.log("Address", address);
    // console.log("Latitude",lagitude);
    // console.log("Longitude",longitude);
    // console.log(JSON.stringify(body.results[0].geometry.location,undefined,2));
  })
}
module.exports={
  geocodeAddress
}
