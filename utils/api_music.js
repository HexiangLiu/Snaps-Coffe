
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
            "x-rapidapi-key": "4eb5968d74msh7a28f9eece9c17ap13c40djsnde5aaab47e32",
            "useQueryString": true
        }, "params": {
            "q": "jazz"
        }
    })

}


module.exports = {
    getComposition: getComposition
}