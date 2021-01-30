import initPopups from './parts/popups';
import initSliders from './parts/sliders';
$(document).ready(() => {
  initPopups();
  initSliders();
});
//Save e-mail
email.value = localStorage.getItem('email');
email.oninput = () => {
  localStorage.setItem('email', email.value)
};

//Success
function sendForm() {
    $('.footer__message__inputs, .error').detach();
    $('.footer__message__success').show();
}

// Validate email
function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}

// validate email and send form after success validation
$("#toSend").on("click", validate);
function validate() {
  var email = $("#email").val();
  var $error = $(".error");

  if (validateEmail(email)) {
    $error.fadeOut();
    sendForm();
  } else {
    $error.fadeIn();
    $error.text("Введите почту в формате '×××@×××.××'");
    $('#email').css({'backgroundColor' : '#FED6D6', 'color':'#D44544'})
  }
  return false;
}