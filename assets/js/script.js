function query(){
$(document).ready(function () {
    var params = new Object();
    params.api_key = "05875cd50919223ef7db595c5c0743c4";
    params.page = 1;
    $.ajax({
        dataType: "json",
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        data: params
    }).done(function (result) {
        console.log(result);
    });
});
}
