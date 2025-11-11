// Wait until DOM is fully loaded

document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

event.preventDefault(); // Stop page reload

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

const isChecked = document.getElementById("age").checked;

if (!email || !password) {

alert("Please fill out all fields!");

return;

}

alert(`Email: ${email}\nPassword: ${password}\nChecked: ${isChecked ? "Yes" : "No"}`);

});

});