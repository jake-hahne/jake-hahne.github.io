/**JS for my web application.
 * Written by Jake Hahne for Web Dev semester project at UNK
 * Fall 2022
 */

function sleep(ms) {
	/**
	 * This in an implementation of a function used to set a timer between processes of the
	 * script, to be used with animations for example.
	 */
	return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener('load', () => {
	/**
	 * Everything below happens on page load action event.
	 * @type {Element}
	 */
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const arrayOfTodos = Object.keys(localStorage);
	let emptyMessage = null;

	/****************************************************************************************************************
	 This section of the script has the purpose of loading all list items by looping through the browsers local storage
	 and creating the task elements and injecting them into the HTML code for the web page. This process happens on
	 page load, therefore when list items are made, they will not be lost on refresh or even quitting the browser. They
	 will only be removed from local storage when they are explicitly deleted by the user.
	 *****************************************************************************************************************/

	if (localStorage.length > 0) {

		for (let i = 0; i < arrayOfTodos.length; i++) {

			//--------------------- Container for a 'task' ------------------------//
			const task_el = document.createElement('div');
			task_el.classList.add('task');

			// Checkmark for each task
			const task_check = document.createElement('input');
			task_check.type = 'checkbox'

			const task_content_el = document.createElement('div');
			task_content_el.classList.add('content');

			task_el.appendChild(task_check);
			task_el.appendChild(task_content_el);

			// Text box used to display a task, can be edited after clicking edit
			const task_input_el = document.createElement('input');
			task_input_el.classList.add('text');
			task_input_el.type = 'text';
			task_input_el.value = arrayOfTodos[i];
			task_input_el.setAttribute('readonly', 'readonly');

			task_content_el.appendChild(task_input_el);

			// Container for edit and delete buttons
			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');

			// Edit button
			const task_edit_el = document.createElement('button');
			task_edit_el.classList.add('edit');
			task_edit_el.innerText = 'Edit';

			// Delete button
			const task_delete_el = document.createElement('button');
			task_delete_el.classList.add('delete');
			task_delete_el.innerText = 'Delete';

			task_actions_el.appendChild(task_edit_el);
			task_actions_el.appendChild(task_delete_el);

			task_el.appendChild(task_actions_el);


			list_el.appendChild(task_el);

			// ------------------ Event for when task is checked off -----------------------//
			task_check.addEventListener('click', (e) => {
				if (task_check.checked) {
					let check_off = new Audio("resources/pencil_checkmark.wav");
					check_off.play();
					task_input_el.style.setProperty("text-decoration", "line-through");
					task_input_el.style.setProperty("color", "#6B7280");
				}
				if (task_check.checked === false) {
					task_input_el.style.setProperty("text-decoration", "none")
					task_input_el.style.setProperty("color", "#EEE");
				}
			});

			//------------------- Event for edit button functionality------------------//

			task_edit_el.addEventListener('click', (e) => {
				if (task_edit_el.innerText.toLowerCase() === "edit") {
					task_edit_el.innerText = "Save";
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();
				} else {
					task_edit_el.innerText = "Edit";
					task_input_el.setAttribute("readonly", "readonly");
				}
			});

			//--------------------- Event for delete button-------------------------------//

			task_delete_el.addEventListener('click', (e) => {
				let whoosh = new Audio("resources/whoosh.wav");
				whoosh.play();
				task_el.classList.add("removed");
				sleep(800).then(() => {
					list_el.removeChild(task_el);
					localStorage.removeItem(task_input_el.value);
					location.reload();
				});

			});
		}
	}

	//----------------Creates the message if a users task list is empty---------------//

	if (!(localStorage > 0)) {
		emptyMessage = document.createElement('div');
		emptyMessage.classList.add('task');

		const emptyMessageContent = document.createElement('div');
		emptyMessageContent.classList.add('content');

		emptyMessage.appendChild(emptyMessageContent);

		const emptyMessageText = document.createElement('input');
		emptyMessageText.classList.add('text');
		emptyMessageText.type = 'text';
		emptyMessageText.value = "Nothing left, enjoy your free time! 😎";
		emptyMessageText.style.fontSize = "40px";
		emptyMessageText.style.color = "var(--orange)";
		emptyMessageText.style.textAlign = "center";
		emptyMessageText.setAttribute('readonly', 'readonly');

		emptyMessageContent.appendChild(emptyMessageText);
		list_el.appendChild(emptyMessage);
	}

	// If local storage is not empty, remove the empty message.
	if (localStorage.length > 0){
		list_el.removeChild(emptyMessage);
	}

/**********************************************************************************************************************/



/*********************************************************************************************************************
This section of script handles the events when a new task is added to the list using the task entry box. A "task" object
is created and a key and value specific to that task is added to the browsers local storage which will later be used
to reload all previously created tasks aside from the tasks that have been explicitly deleted by the user.  
**********************************************************************************************************************/ 

	//------------------------- Event new task creation ------------------------------//

	form.addEventListener('submit', (e) => {
		e.preventDefault();


		const task = input.value;

		//--------------------- Container for a 'task' --------------------------------//
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		// Checkmark for each task
		const task_check = document.createElement('input');
		task_check.type = 'checkbox'

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_check);
		task_el.appendChild(task_content_el);

		// Text box used to display a task, can be edited after clicking edit
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);
		
		localStorage.setItem(task_input_el.value, task_input_el.value);

		// Container for edit and delete buttons
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		// Edit button
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		// Delete button
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);
		
	
		list_el.appendChild(task_el);

		input.value = '';

		sleep(3000);
		location.reload();
	});
});
