// start coding your function here!
var date = new Date();
function running_late(){
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h > 21 && m >= 00 && s>=00){
    return"It is late!";

    }else {
        return "It is stil early!";
    }
   
}

exports.running_late = running_late; 
