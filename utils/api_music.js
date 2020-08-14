<<<<<<< HEAD
<<<<<<<< HEAD:utils/api_music.js
/* Load the HTTP library */
var unirest = require("unirest");
require("dotenv").config({path:"../.env"})
========

const axios = require("axios");
require("dotenv").config()
>>>>>>>> 76ba9eacc14b9f6beee9ad2be157bec588f503b5:api req/api_music.js


function getComposition() {


    axios({
=======

const axios = require("axios");
require("dotenv").config()

// let audioFile = []
function getComposition() {


    return axios({
>>>>>>> 76ba9eacc14b9f6beee9ad2be157bec588f503b5
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
<<<<<<< HEAD
            console.log(songs)
            songs.map(song => {
                let audioTitle = song.title_short;
                let audioFile = song.preview;
                console.log("audioFile:", audioFile)
                console.log("audioTitle:", audioTitle)
            })

=======

            return songs
>>>>>>> 76ba9eacc14b9f6beee9ad2be157bec588f503b5

        })
        .catch((error) => {
            console.log(error)
        })


<<<<<<< HEAD
}

module.exports = getComposition
=======
    // songs.map(song => {
    //     // let audioTitle = song.title_short;
    //     audioFile = song.preview;
    //     console.log("audioFile:", audioFile)
    //     // console.log("audioTitle:", audioTitle)
    //     //create an array of objects songs that array contain keys as a ausioFile and audioTitle
    //     //return an array as a result
    //     return audioFile
    //     // console.log(audioFile)



}



module.exports = {
    getComposition: getComposition
}


// app.get('/api/user_data', function (req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         username: req.user.username,
//         id: req.user.id,
//       });
//     }
//   });
>>>>>>> 76ba9eacc14b9f6beee9ad2be157bec588f503b5
