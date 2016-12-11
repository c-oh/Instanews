$(document).ready(function () {



$('#mySelect').heapbox({
  'onChange': function(){
    $('.loading_thing').show();
    
//When the user selects the category, the site size and header will shrink
 $('.headers').addClass('header-minify');
  $('.site').addClass('site-minify');

//This is the API stories area
  var $news = $('.stories');

//The selection of the user
  var userSelect = $('#mySelect').val();

//Calling API with the selection of the user
  var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';

  url += '?' + $.param({
    'api-key':'2cee7ea7b62f4e7d83a741c409dae5e4'
  });

  $.ajax({
    url: url,
    method: 'GET',
  })

  .done(function (data) {
    //The article stories area becomes empty
    $news.empty();
    //The info variable represents output of API
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

  
  .fail(function(error){
      $news.append('<p class="error"> Sorry! There is a problem with your request, please try again. </p>');
    })
    .always(function(){
          $('.loading_thing').hide();
    });
  }
});

})

