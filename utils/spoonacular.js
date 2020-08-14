<<<<<<< HEAD
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
=======
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


  // menuItems.map(menuItem => {
  //   let itemTitle = menuItem.title;
  //   let itemImage = menuItem.image;
  //   let itemServing = menuItem.servingSize;
  //   console.log(itemTitle);
  //   console.log(itemImage);
  //   console.log(itemServing);
  // })
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
};
// menuQuery(searchItem);
module.exports = { menuQuery: menuQuery }
>>>>>>> 76ba9eacc14b9f6beee9ad2be157bec588f503b5
