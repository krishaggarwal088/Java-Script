async function add(a,b) {
let response = await a + b;
display(response);
}
function display(some) {
document.getElementById("result").innerHTML =
some;
}
add(60,7);