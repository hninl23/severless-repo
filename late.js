// start coding your function here!

function running_late(date){
    var date = new Date();
    var h = date.getHours();
    //var m = date.getMinutes();
    //var s = date.getSeconds();

    if (h >= 22) {
        return"It is late!";
    }
        //&& m >= 00 && s>=00)
    else {
        return "It is still early!"; 
    }
        
    }
          

exports.running_late = running_late; 
