function myFunction() {
var greeting;
var time = new Date().getHours();

if (time < 12) {
greeting = "Good morning";
}
else if (time < 17) {
greeting = "Good evening";
}
else {
greeting = "Good night";
}
document.getElementById("hour").innerHTML = "Current Hour is : "
+ time;
document.getElementById("greet").innerHTML = greeting;
}