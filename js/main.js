var omaha_url = "https://api.openweathermap.org/data/2.5/weather?lat=42.25&lon=95.99&APPID=25de4193d974875b028cb9b0b62ea042";
var time;
var sunrise;
var sunset;
var day_length;
var day_remaining;
var position;
var rotation;
var current_time;
var time_remaining;
var hours, minutes, seconds;




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
                $(".overlay").fadeIn(1000);
                $(".overlay").delay(1500);},
                            function(){
                $(".overlay").delay(1500);
                $(".overlay").fadeOut(1000);
            });
                            
                
            setInterval(
                function countdown() {
                    current_time = Math.round(Date.now() / 1000);
                    time_remaining = sunset - current_time;
                    hours = parseInt(time_remaining / 3600);
                    time_remaining = time_remaining % 3600;

                    minutes = parseInt(time_remaining / 60);
                    seconds = parseInt(time_remaining % 60);

                    var showCountdown = "";

                    if (hours !== 0) {
                        if (hours == 1) {
                            showCountdown = showCountdown + hours + " hour ";
                        } else {
                            showCountdown = showCountdown + hours + " hours ";
                        }
                    }
                    if (minutes !== 0) {
                        if (minutes == 1) {
                            showCountdown = showCountdown + minutes + " minute ";
                        } else {
                            showCountdown = showCountdown + minutes + " minutes ";
                        }
                    }
                    if (seconds == 1) {
                        $(".countdown").html(showCountdown + seconds + " second");
                    } else {
                        $(".countdown").html(showCountdown + seconds + " seconds");
                    }

                }, 1000);
            


        } else { 
            $("body").css("background-color", "midnightblue");
            $(".sun").css("display", "none");
             setInterval(
                function countdown() {
                    current_time = Math.round(Date.now() / 1000);
                    time_remaining = (sunrise + 86400) - current_time;
                    hours = parseInt(time_remaining / 3600);
                    time_remaining = time_remaining % 3600;

                    minutes = parseInt(time_remaining / 60);
                    seconds = parseInt(time_remaining % 60);

                    var showCountdown = "";

                    if (hours !== 0) {
                        if (hours == 1) {
                            showCountdown = showCountdown + hours + " hour ";
                        } else {
                            showCountdown = showCountdown + hours + " hours ";
                        }
                    }
                    if (minutes !== 0) {
                        if (minutes == 1) {
                            showCountdown = showCountdown + minutes + " minute ";
                        } else {
                            showCountdown = showCountdown + minutes + " minutes ";
                        }
                    }
                    if (seconds == 1) {
                        $(".countdown").html(showCountdown + seconds + " second");
                    } else {
                        $(".countdown").html(showCountdown + seconds + " seconds");
                    }

                }, 1000);
        }


    });


});
