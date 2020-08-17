const detail_container = $('.item-detail');
const audioEl = $('.audioEl');
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
    $.ajax({
      url: '/api/music',
      method: 'GET',
    }).then(function (songs) {
      let i = Math.floor(Math.random() * songs.length);
      //choose the random song
      let audioTitle = songs[i].title_short;
      let audioFile = songs[i].preview;
      //append random song to the page
      detail_container.append(`<div class="text-center"><audio class="mt-3 text-center" autoplay loop controls volume 0.001 >
      <source src="${audioFile}" />
    </audio><br/><p>Now's playing: ${audioTitle}</p></div>`);
    });
    $('.submit_order').on('click', () => {
      console.log('clicked');
      $.post('/api/orders', { name: $('.title').text() }).then(() => {
        location.reload();
      });
    });
  });
});