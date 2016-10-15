$(document).ready(function () {
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
        'api-key': "2cee7ea7b62f4e7d83a741c409dae5e4"
    });
    $.ajax({
        url: url,
        method: 'GET',
    })
});


