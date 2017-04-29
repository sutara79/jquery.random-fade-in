$(function() {
  $('.box-container').randomFadeIn('', false);

  $('#reset1').click(function() {
    $('.box-container').randomFadeIn('', false);
  });
  $('#reset2').click(function() {
    $('.box-container').randomFadeIn(100);
  });
});