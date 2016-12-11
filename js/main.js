$(document).ready(function () {

});

$('#sections').change(function () {
    $('.loading_thing').show();

 $('.headers').addClass('header-minify');

  var $news = $('.stories');

  var userSelect = $('#sections').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';

  url += '?' + $.param({
    'api-key':'2cee7ea7b62f4e7d83a741c409dae5e4'
  });

  $.ajax({
    url: url,
    method: 'GET',
  })

  .done(function (data) {
    $news.empty();
    var info = [];
    info = $(data.results).filter(function (key, value) {
      return $(value.multimedia).length >= 5;
    })

    info.splice(12);

    $.each(info, function (key, value) {
        var picture = '<a class=links href=' + value.url +'> <div class= "articles" style= background-image:url(' + value.multimedia[4].url +' )>';
        var abstract = '<p>' + value.abstract + '</p></div></a>';
        var info = picture + abstract;
        $('.stories').append(info);
      }) 
      
  })

  .always(function(){
          $('.loading_thing').hide();
    })

  .fail(function(error){
      $news.append('<p class="error"> Sorry! There is a problem with your request, please try again. </p>');
    })

});
