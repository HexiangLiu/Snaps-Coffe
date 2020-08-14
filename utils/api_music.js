/* Load the HTTP library */
var unirest = require("unirest");
require("dotenv").config({path:"../.env"})


var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

req.query({
    "q": "jazz"
});

req.headers({
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": process.env.PASSW_DW,
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});