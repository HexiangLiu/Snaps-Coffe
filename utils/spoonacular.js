const request = require("request");
require("dotenv").config({path:"../.env"});

let searchItem = "frappuccino";

const menuItems = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search',
  qs: {
    query: searchItem,
    number: '1',
  },
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.SPOONAPI,
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

// Ben's code ===============================================
// const spoonacular = {
//   getMenuItems: function() {
//     // do api calls 

//     // return the whole promise 
//   }
// }