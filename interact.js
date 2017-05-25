$(document).ready(function() {
    $('#header').click(function() {
        $('.top').html('<ul id="nav_bar"><li><a href="#info">Information</a></li></ul>');
        $('#content').click(function() {
          $('.top').html('<h1>Increase Solar Panels</h1>');
        });
        $('#footer').click(function() {
          $('.top').html('<h1>Increase Solar Panels</h1>');
        });
    });
});
