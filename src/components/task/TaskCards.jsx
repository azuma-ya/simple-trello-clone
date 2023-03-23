import React, { useState } from "react";
import AddTaskCardButton from "./Button/AddTaskCardButton";
import TaskCard from "./TaskCard";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function TaskCards() {
	const [taskCardsList, setTaskCardsList] = useState([{ id: uuidv4() }]);

	const reorder = (list, startIndex, endIndex) => {
		const remove = list.splice(startIndex, 1);
		list.splice(endIndex, 0, remove[0]);
		return list;
	};

	const handleDragEnd = (result) => {
		//タスクを並び替える
		setTaskCardsList(
			reorder(taskCardsList, result.source.index, result.destination.index)
		);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided) => (
					<div
						className="taskCardsArea"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{taskCardsList.map((taskCardList, index) => (
							<TaskCard
								key={taskCardList.id}
								taskCardsList={taskCardsList}
								setTaskCardsList={setTaskCardsList}
								taskCardList={taskCardList}
								index={index}
							/>
						))}
						{provided.placeholder}
						<AddTaskCardButton
							taskCardsList={taskCardsList}
							setTaskCardsList={setTaskCardsList}
						/>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}
