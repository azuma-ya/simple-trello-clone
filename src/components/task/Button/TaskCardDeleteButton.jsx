import React from "react";

export default function TaskCardDeleteButton({
	taskCardsList,
	setTaskCardsList,
	taskCardList,
}) {
	const deleteTaskCard = (id) => {
		setTaskCardsList(
			taskCardsList.filter((taskCardList) => taskCardList.id !== id)
		);
	};
	return (
		<div>
			<button
				className="taskCardDeleteButton"
				onClick={() => deleteTaskCard(taskCardList.id)}
			>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</div>
	);
}
