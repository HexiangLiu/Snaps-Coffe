
const axios = require("axios");
require("dotenv").config()

// let audioFile = []
function getComposition() {
    return axios({
        "method": "GET",
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": process.env.PASSW_DW,
            "useQueryString": true
        }, "params": {
            "q": "jazz"
        }
    })

}


module.exports = {
    getComposition: getComposition
}



