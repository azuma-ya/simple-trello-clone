import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskCardButton({ taskCardsList, setTaskCardsList }) {
	const addTaskCard = () => {
		setTaskCardsList([
			...taskCardsList,
			{
				id: uuidv4(),
			},
		]);
	};
	return (
		<div className="addTaskCardButtonArea">
			<button className="addTaskCardButton" onClick={addTaskCard}>
				+
			</button>
		</div>
	);
}
