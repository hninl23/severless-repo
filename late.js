// start coding your function here!

function running_late(date){
    var date = new Date(dateString);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h >= 21 && m >= 00 && s>=00)
    return"It is late!";
    return "It is still early!";
}
exports.running_late = running_late; 