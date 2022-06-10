// start coding your function here!
function running_late()
let hour = new Date ().getHours()
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