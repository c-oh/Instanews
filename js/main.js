$(document).ready(function () {

});

$('.search').change(function () {
    $('.loading_thing').show();

  var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
  url += '?' + $.param({
    'api-key':'2cee7ea7b62f4e7d83a741c409dae5e4'
  });

  $.ajax({
    url: url,
    method: 'GET',
  })

  .done(function (data) {
    var info = [];
    info = $(data.results).filter(function (key, value) {
      return $(value.multimedia).length >= 5;
    })
    info.splice(12);
    $.each(info, function (key, value) {
        //var url = value.url;
        var picture = '<a class=links href=' + value.url +'> <div class= articles style= background-image:url(' + value.multimedia[4].url +' )>';
        var abstract = '<p>' + value.abstract + '</p></div></a>';
        var info = picture + abstract;
        $('.stories').append(info);
      }) 
      
  })
  .always(function(){
          $('.loading_thing').hide();
    }); 
});