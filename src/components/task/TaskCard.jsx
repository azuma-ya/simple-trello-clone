import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TaskCardDeleteButton from "./Button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

export default function TaskCard({
	taskCardsList,
	setTaskCardsList,
	taskCardList,
	index,
}) {
	const [inputText, setInputText] = useState("");
	const [taskList, setTaskList] = useState([]);
	return (
		<Draggable draggableId={taskCardList.id} index={index}>
			{(provided) => (
				<div
					className="taskcard"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div
						className="taskCardTitleAndDeleteButton"
						{...provided.dragHandleProps}
					>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
							taskCardList={taskCardList}
						/>
					</div>
					<TaskAddInput
						inputText={inputText}
						setInputText={setInputText}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
					<Tasks taskList={taskList} setTaskList={setTaskList} />
				</div>
			)}
		</Draggable>
	);
}
