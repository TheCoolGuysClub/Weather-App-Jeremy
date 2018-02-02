const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  address:  {
  demandOption:true,
  alias:'a',
  describe:'Address to fetch'
  }
}).help()
.alias("help", 'h')
.argv;

const encodedAddress = encodeURIComponent(argv.address);
const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`
axios.get(geocodeURL)
  .then ((response) => {
    // console.log(response);
    if (response.body.status = "ZERO_RESULTS") {
      throw new Error("unable to find that address");
    }
    //send get request to darksky
    //return axios.get()
  })
  .then((response) => {

  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND') {
      //rejected from axios cal to google api
      console.log("unable to connect with google");
      //we threw an erro cuz that address doesn't exist
    } else if (e.message) {
      console.log("caught error");
      console.log(e.message);
    }

  })
