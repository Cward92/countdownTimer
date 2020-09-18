var finish = new Date("dec 25, 2020 00:00:00").getTime(); //set initial countdown time//
var x = setInterval(function() { //establish interval update function//
    var time = new Date().getTime(); //init current time//
    var countdown = finish - time; //define countdown time (in milliseconds)//
    var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    var hours = Math.floor((countdown%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var mins = Math.floor((countdown%(1000 * 60 * 60))/(1000 * 60));
    var secs = Math.floor((countdown%(1000 * 60))/ 1000);
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + mins + " minutes " + secs + " seconds ";
        if (countdown < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Christmas is Here!!!"
        }
}, 1000);