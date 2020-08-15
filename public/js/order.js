const place_btn = $('.submit_order');
const title = $('.title');
const external_routes = ('')
var btn = $(".itemBtn")
// const getComposition = require("./utils/api_music.js")
$.ajax({
  url: "/api/music",
  method: "GET"
}).then(function (songs) {

  songs.map(song => {
    let audioTitle = song.title_short;
    let audioFile = song.preview;
    console.log("audioFile:", audioFile)
    console.log("audioTitle:", audioTitle)

  });

  //choose the random song
  //inside of the  audio element create a var, that can contain src of the random song
  btn.on('click', () => {
    //make ajax request
    $.ajax({
      url: "/api/spoonacular",
      method: "GET"
    }).then(function (menuItems) {
      menuItems.map(menuItem => {
        let itemTitle = menuItem.title;
        let itemImage = menuItem.image;
        let itemServing = menuItem.servingSize;
        console.log(itemTitle);
        console.log(itemImage);
        console.log(itemServing);
      });
    })
  })
})




place_btn.on('click', () => {
  console.log('clicked');
  $.post('/api/orders', { name: title.text() }).then((order) => {
    console.log(order);
    location.reload();
  });

})
