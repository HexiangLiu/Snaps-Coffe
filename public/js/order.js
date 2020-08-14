const place_btn = $('.submit_order');
const title = $('.title');

btn.on('click', () => {
  //make ajax request
  //get the data back
  //create html string
  //append it to the page
});

place_btn.on('click', () => {
  console.log('clicked');
  $.post('/api/orders', { name: title.text() }).then((order) => {
    console.log(order);
    location.reload();
  });
});
