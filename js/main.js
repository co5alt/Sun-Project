var omaha_url = "http://api.openweathermap.org/data/2.5/weather?lat=42.25&lon=95.99&APPID=25de4193d974875b028cb9b0b62ea042";
var time;
var sunrise;
var sunset;
var day_length;
var day_remaining;
var position;
var rotation;


$(document).ready(function () {


    $.getJSON(omaha_url, function (data) {
        time = data.dt;
        sunrise = data.sys.sunrise + 46800;
        sunset = data.sys.sunset + 46800;
        $("#sunrise").text(sunrise);
        $("#current").text(time);
        $("#sunset").text(sunset);
        day_length = sunset - sunrise;
        day_remaining = sunset - time;
        position = 100 - Math.round(day_remaining / day_length * 100);
        rotation = position * 1.8;


        if (time >= sunrise && time < sunset) {
            $("body").css("background-color", "skyblue");
            $("body").css("color", "yellow");
            $("#fulcrum").css("transform", "rotate(" + rotation + "deg)");
        } else {
            $("body").css("background-color", "midnightblue");
            $("body").css("color", "gray");
            $(".sun").css("display", "hidden");
        }
    });

});
