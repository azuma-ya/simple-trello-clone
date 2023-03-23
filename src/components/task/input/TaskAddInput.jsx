import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskAddInput({
	inputText,
	setInputText,
	taskList,
	setTaskList,
}) {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText === "") return;
		// add a task
		setTaskList([...taskList, { id: uuidv4(), text: inputText }]);
		setInputText("");
	};

	const handleChange = (e) => {
		setInputText(e.target.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add a Task"
					className="taskAddInput"
					onChange={handleChange}
					value={inputText}
				/>
			</form>
		</div>
	);
}
