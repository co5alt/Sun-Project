var omaha_url = "https://api.openweathermap.org/data/2.5/weather?lat=42.25&lon=95.99&APPID=25de4193d974875b028cb9b0b62ea042";
var time;
var sunrise;
var sunset;
var day_length;
var day_remaining;
var position;
var rotation;
var time_remaining;
var hours;
var minutes;
var seconds;


function countdown() {
    var current_time = Math.round(Date.now() / 1000);
    time_remaining = sunset - current_time;
    hours = parseInt(time_remaining / 3600);
    time_remaining = time_remaining % 3600;

    minutes = parseInt(time_remaining / 60);
    seconds = parseInt(time_remaining % 60);



    var showCountdown = "";

    if (hours !== 0) {
        showCountdown = showCountdown + hours + ":";
    }
    if (minutes !== 0) {
        if (minutes.length == 1) 
        {showCountdown = showCountdown + "0" + minutes + ":";}
         else {showCountdown = showCountdown + minutes + ":";}
    }
 if (seconds.length == 1) {
     $("#countdown").html(showCountdown +"0" + seconds);
 }
        
    else {$("#countdown").html(showCountdown + seconds);}

}


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
            $("#fulcrum").css("transform", "rotate(" + rotation + "deg)");
            $(".sun").hover(function(){
                $(this).css("color", "blue");},
                            function(){
                $(this).css("color", "yellow");
            });
            $("#moon").css("display", "none");
        setInterval(countdown(), 1000);

        } else {
            $("body").css("background-color", "midnightblue");
            $("body").css("color", "gray");
            $(".sun").css("display", "none");
            $("#moon").fadeIn();
        }


    });


});
