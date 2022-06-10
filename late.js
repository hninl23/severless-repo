// start coding your function here!
let hour = new Date ().getHours()
function running_late()
{
if (hour > 22 )
{
    return"It is late!"
}
else
{
    return "It is still early!"
}
}

exports.running_laate = running_late;
