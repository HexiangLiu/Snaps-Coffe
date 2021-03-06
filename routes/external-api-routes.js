const { getComposition } = require('../utils/api_music.js');
const { menuQuery } = require('../utils/spoonacular.js');

module.exports = function (app) {
  app.get('/api/music', async function (req, res) {
    const response = await getComposition();
    // console.log("IAM WOKRING")
    // console.log(response);
    res.json(response.data.data);
  });

  app.get('/api/spoonacular', async function (req, res) {
    console.log(req.query.q);
    const response = await menuQuery(req.query.q);
    // console.log("Werking?");
    // console.log(response);
    res.json(response.data.menuItems);
  });
};
