$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $('form.signup');
  var nameInput = $('input#username-input');
  var passwordInput = $('input#password-input');

  // When the signup button is clicked, we validate the name and password are not blank
  signUpForm.on('submit', function (event) {
    console.log('submit');
    event.preventDefault();
    var userData = {
      username: nameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an name and password, run the signUpUser function
    signUpUser(userData.username, userData.password);
    nameInput.val('');
    passwordInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, password) {
    $.post('/api/signup', {
      username: name,
      password: password,
    })
      .then(function (data) {
        window.location.replace('/members');
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});
