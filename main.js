window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

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

		//--------------- Event when task is checked off task list -----------------------//
		
		task_check.addEventListener('click', (e) => {
			if (task_check.checked) {
				task_input_el.style.setProperty("text-decoration", "line-through");
				task_input_el.style.setProperty("color", "#6B7280");
			}
			if (task_check.checked == false) {
				task_input_el.style.setProperty("text-decoration", "none")
				task_input_el.style.setProperty("color", "#EEE");
			}
		});

		//------------------- Event for edit button functionality------------------//

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
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
			list_el.removeChild(task_el);
		});
	});
});