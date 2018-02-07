const axios = require(`axios`);

const geocodeAddress = (address,callback)=>{
  // console.log("hi");
  const encodedAddress = encodeURIComponent(address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
  axios.get(geocodeUrl)
  .then((response)=>{
    if(response.data.status ==="ZERO_RESULTS"){
      callback("This address does not exists",undefined);
    }
    else{
      callback({
        address:response.data.results[0].formatted_address,
        lng: response.data.results[0].geometry.location.lng,
        lag: response.data.results[0].geometry.location.lat
      },undefined);

    }
  })
}
module.exports={
  geocodeAddress
}
