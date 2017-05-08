$(document).ready(function() {
    $('#header').click(function() {
        $('.top').html('<ul><li><a href="#info">Information</a></li></ul>');
    });
    $('#header').mouseleave(function() {
      $('.top').html('<h1>Increase Solar Panels</h1>');
    });
});