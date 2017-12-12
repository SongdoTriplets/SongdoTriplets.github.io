$(function() {
  $('body').scrollspy({
    target: '#navScrollspy'
  });
})

$('#sparklines-button').on('click', function() {
  $('#sparklines').toggleClass('hide')
})
