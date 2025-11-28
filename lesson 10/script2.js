try {
addalert("Welcome guest!");
}
catch(err) {
document.getElementById("error_message").innerHTML =
err.message;
}