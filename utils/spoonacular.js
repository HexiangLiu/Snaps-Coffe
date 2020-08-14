const axios = require("axios");
require("dotenv").config({ path: "../.env" });
// convert axios function to your current request function
// give the over function
// let searchItem = "frappuccino";
function menuQuery(searchItem) {
  return axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.SPOONAPI,
      "useQueryString": true
    }, "params": {
      "offset": "0",
      "number": "1",
      "query": searchItem
    }
  })

};
// menuQuery(searchItem);
module.exports = { menuQuery: menuQuery }