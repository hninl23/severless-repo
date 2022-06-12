// start coding your function here!
var date = new Date("December 17, 1995 22:24:00");
function running_late(date){
    //var date = new Date("December 17, 1995 22:24:00");
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h >= 21 && m >= 00 && s>=00)
    return"It is late!";
    return "It is still early!";
}

exports.running_late = running_late; 
