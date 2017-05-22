// Get name and store it to the console.

const form = document.getElementById("registrar");
const input = form.querySelector("input");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Add name to unordered list below the form

	const text = input.value;

	// Clear form after name is submitted

	input.value = "";

	const ul = document.getElementById("invitedList");
	const li = document.createElement("li");
	li.textContent = text;
	ul.appendChild(li);
});


