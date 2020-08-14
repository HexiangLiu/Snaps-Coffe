const place_btn = $('.submit_order');
const title = $('.title');
const external_routes = ('')
// const getComposition = require("./utils/api_music.js")

btn.on('click', () => {
  //make ajax request
  $.ajax({
    url: "/api/music",
    method: "GET"
  }).then(function (response) {

    songs.map(song => {
      let audioTitle = song.title_short;
      audioFile = song.preview;
      console.log("audioFile:", audioFile)
      console.log("audioTitle:", audioTitle)
      // create an array of objects songs that array contain keys as a ausioFile and audioTitle
      // return an array as a result
      return audioFile
      console.log(response);
    });

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

      //get the data back

    })



  })

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
