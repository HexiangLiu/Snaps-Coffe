/* Load the HTTP library */
var unirest = require("unirest");
require("dotenv").config()

// const music = {
function getComposition(audioTitle, audioFile) {

    var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

    req.query({
        "q": "jazz"
    });

    req.headers({
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "4eb5968d74msh7a28f9eece9c17ap13c40djsnde5aaab47e32",
        // process.env.PASSW_DW,
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
        audioTitle = res.body.title_short;
        audioFile = res.body.link;
        console.log("audioFile:", audioFile)
        console.log("audioTitle:", audioTitle)
    })

}

getComposition()
