
const axios = require("axios");
require("dotenv").config()

// let audioFile = []
function getComposition(audioFile) {


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
                // let audioTitle = song.title_short;
                audioFile = song.preview;
                console.log("audioFile:", audioFile)
                // console.log("audioTitle:", audioTitle)
                //create an array of objects songs that array contain keys as a ausioFile and audioTitle
                //return an array as a result
                return audioFile
                // console.log(audioFile)

            }
            )

        })
        .catch((error) => {
            console.log(error)
        })


}
getComposition()


module.exports = getComposition


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
