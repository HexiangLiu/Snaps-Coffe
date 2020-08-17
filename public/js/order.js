const detail_container = $('.item-detail');
const audioEl = $('.audioEl')
var btn = $('.menu-item');



btn.on('click', (e) => {
  //make ajax request


  let q;

  if (e.target.matches('h3')) {
    q = `q=${$(e.target).text()}`;
  } else if (e.target.matches('li')) {
    q = `q=${$(e.target.lastElementChild).text()}`;
  } else if (e.target.matches('img')) {
    q = `q=${$(e.target.nextElementSibling).text()}`;
  }
  $.ajax({
    url: '/api/spoonacular/?' + q,
    method: 'GET',
  }).then(function (menuItems) {
    detail_container.empty();

    detail_container.append(`<div class="card">
      <img src="${menuItems[0].image}"
          class="card-img-top item-img" alt="${menuItems[0].title}">
      <div class="card-body">
          <h5 class="card-title title">${menuItems[0].title}</h5>
          <p class="card-text">Serving Size: ${
      menuItems[0].servingSize ? menuItems[0].servingSize : 1
      }</p>
          <button class="btn btn-warning btn-block text-white submit_order">Place order</button>
      </div>
  </div>`);
    // $.ajax({
    //   url: '/api/music',
    //   method: 'GET',
    // }).then(function (songs) {
    //   songs.map((song) => {
    //     let audioTitle = song[0].title_short;
    //     let audioFile = song[0].preview;
    //     console.log('audioFile:', audioFile);
    //     console.log('audioTitle:', audioTitle);
    //     audioEl.append(`<audio controls volume 0.01>
    // <source src="${audioFile}" >

    // </audio>
    // <p>Now's playing:</p>${audioTitle}`)
    //   });
    $('.submit_order').on('click', () => {
      console.log('clicked');
      $.post('/api/orders', { name: $('.title').text() }).then(() => {
        location.reload();
      });
    });
  });
});
});

//choose the random song
//create an audio element that contains as a src the random song
// var music = $("<audio autoplay='autoplay' controls='controls'><source src='" + audioFile + "'></audio>")
// //append it to the page
// $("body").append(music)
// });
