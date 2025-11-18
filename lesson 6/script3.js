var text = "";
var i = 1
while (i < 31) {
    text += "<br>The number is "+ i;
    i++;
}
document.getElementById("number").innerHTML = text;
