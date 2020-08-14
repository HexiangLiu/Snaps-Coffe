const request = require("request");
require("dotenv").config();

let searchItem = "frappuccino";

const menuItems = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search',
  qs: {
    query: searchItem,
  },
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.spoonAPI,
    useQueryString: true
  }
};



function menuQuery(searchItem){
    request(menuItems, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log(body);
    }
)};

menuQuery(searchItem);