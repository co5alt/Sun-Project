var time = Date.now()/1000;
var omaha_url = "https://api.darksky.net/forecast/5b6168fb3f456887c8bb317aec03b9e3/41.2524,95.9980";

function get_times(url) {
    $.getJSON(url, function (result) {
        var sunrise = result.daily.data.sunriseTime;
        var sunset = result.daily.data.sunsetTime;
       
        $("#sunrise").text(sunrise);
        $("#current").text(time);
        $("#sunset").text(sunset);
         if (time >= sunrise && time < sunset) {
            $("body").css("background-color", "skyblue");
        } else {
            $("body").css("background-color", "midnightblue");
        }
        

       
    });

}

$(document).ready(function () {
    get_times(omaha_url);

});


//25de4193d974875b028cb9b0b62ea042