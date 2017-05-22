// Get name and store it to the console.

// const form = document.getElementById("registrar");
// const input = form.querySelector("input");
// const ul = document.getElementById("invitedList");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();

	// Add name to unordered list below the form

	// const text = input.value;

	// Clear form after name is submitted

	// input.value = "";

	// const li = document.createElement("li");
	// li.textContent = text;

	// Create RSVP checkbox

	// const label = document.createElement("label");
	// label.textContent = "Confirmed";
	// const checkbox = document.createElement("input");
	// checkbox.type = "checkbox";
	// label.appendChild(checkbox);
	// li.appendChild(label);

	// Add a remove button and remove the name

// 	const button = document.createElement("button");
// 	button.textContent = "remove";
// 	li.appendChild(button);

// 	ul.appendChild(li);
// });


// Create a handler for the checkbox - when checked, add class of responded to the list item

// ul.addEventListener("change", (e) => {
// 	const checkbox = event.target;
// 	const checked = checkbox.checked;
// 	const listItem = checkbox.parentNode.parentNode;

// 	if (checked) {
// 		listItem.className = "responded";
// 	} else {
// 		listItem.className = "";
// 	}

// });

// Create a handler for removing items

// ul.addEventListener("click", (e) => {
// 	if (e.target.tagName === "BUTTON") {
// 		const li = e.target.parentNode;
// 		const ul = li.parentNode;
// 		ul.removeChild(li);
// 	}
// });



//-----------------------------------------------------------------------------



const form = document.getElementById("registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

// Create a function to get names and store to the console

function createLI(text) {
	const li = document.createElement("li");
	li.textContent = text;
	const label = document.createElement("label");
	label.textContent = "Confirmed";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	label.appendChild(checkbox);
	li.appendChild(label);
	const button = document.createElement("button");
	button.textContent = "remove";
	li.appendChild(button);
	return li;

}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = "";
	const li = createLI(text);
	ul.appendChild(li);
});


// Create a handler for the checkbox - when checked, add class of responded to the list item

ul.addEventListener("change", (e) => {
	const checkbox = event.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;

	if (checked) {
		listItem.className = "responded";
	} else {
		listItem.className = "";
	}

});

// Create a handler for removing items

ul.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});
