var fruits = ["Apple", "Mango", "Grapes",
"Watermelon", "Jack Fruit", "Banana"];
var text = "";
var i;
for (i = 0; i < fruits.length; i++) {
text += fruits[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;