// start coding your function here!
var date = new Date ().getHours();
function running_late(date){
    if (date > 22 )
{
    return"It is late!";
}
    return "It is still early!";
}

 
exports.running_late = running_late;
