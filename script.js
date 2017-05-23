// Get name and store it to the console.

const form = document.getElementById("registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

// Create a function to get names and store to the console

function createLI(text) {
	const li = document.createElement("li");

	// Create an HTML element so that an editing state can be created

	const span = document.createElement("span");
	span.textContent = text;
	li.appendChild(span);

	// Create a checkbox and change an item's label to confirmed

	const label = document.createElement("label");
	label.textContent = "Confirmed";
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	label.appendChild(checkbox);
	li.appendChild(label);

	// Create an edit button

	const editButton = document.createElement("button");
	editButton.textContent = "edit";
	li.appendChild(editButton);

	// Create a remove button

	const removeButton = document.createElement("button");
	removeButton.textContent = "remove";
	li.appendChild(removeButton);

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

// Create a handler for removing items and editing items

ul.addEventListener("click", (e) => {
	if (e.target.tagName === "BUTTON") {
			const button = e.target;
			const li = button.parentNode;
			const ul = li.parentNode;
		if (button.textContent === "remove") {
			ul.removeChild(li);
	} else if (button.textContent === "edit") {
		const span = li.firstElementChild;
		const input = document.createElement("input");
		input.type = "text";
		input.value = span.textContent;
		li.insertBefore(input, span);
		li.removeChild(span);
		button.textContent = "save";

		// Move list items to a saved state when the button is clicked

    } else if (button.textContent === "save") {
		const ipnut = li.firstElementChild;
		const span = document.createElement("span");
		span.textContent = input.value;
		li.insertBefore(span, input);
		li.removeChild(input);
		button.textContent = "edit";
    }
  }
});
