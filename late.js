// start coding your function here!

function running_late(date){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h >= 22){
        return "It is late!";

    }else {
        return "It is still early!";   
        }
        
    }
//var date = new Date("December 17, 1995 23:24:00");
//console.log(date.getHours("December 17, 1995 22:24:00"))
//console.log(running_late("December 17, 1995 22:24:00"))
exports.running_late = running_late; 
