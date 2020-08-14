const place_btn = $('.submit_order');
const title = $('.title');
// const getComposition = require("./utils/api_music.js")

btn.on('click', () => {
  //make ajax request
  getComposition()
  //get the data back
  //???
  //the getComposition function brings back an array 
  //choose the random song
  //create an audio element that contains as a src the random song
  var music = $("<audio autoplay='autoplay' controls='controls'><source src='" + audioFile + "'></audio>")
  //append it to the page
  $("body").append(music)
});

place_btn.on('click', () => {
  console.log('clicked');
  $.post('/api/orders', { name: title.text() }).then((order) => {
    console.log(order);
    location.reload();
  });
});
