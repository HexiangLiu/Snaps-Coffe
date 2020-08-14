const { getComposition } = require("../utils/api_music.js")
const { menuQuery } = require("../utils/spoonacular.js")

module.exports = function (app) {
    app.get("/api/music", async function (req, res) {
        const audioFiles = await getComposition()
        console.log("IAM WOKRING")
        console.log(audioFiles)
        res.json(audioFiles)
    })

    app.get('/api/spoonacular', async function (req, res) {
        const response = await menuQuery("frappuccino");
        console.log("Werking?");
        console.log(response);
        res.json(response.data.menuItems);
    })
}
