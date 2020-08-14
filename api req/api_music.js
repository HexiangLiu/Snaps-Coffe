
const axios = require("axios");
require("dotenv").config()


function getComposition() {


    axios({
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
        .then((response) => {

            const songs = response.data.data;
            console.log(songs)
            songs.map(song => {
                let audioTitle = song.title_short;
                let audioFile = song.preview;
                console.log("audioFile:", audioFile)
                console.log("audioTitle:", audioTitle)
            })


        })
        .catch((error) => {
            console.log(error)
        })


}

module.exports = getComposition
