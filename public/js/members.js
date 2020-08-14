$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then(function (orders) {
    orders.forEach((order) => {
      $('.order-list').append(`   <li
      class="order-item lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
    >
      ${order.name}
    </li>`);
    });
  });
});
