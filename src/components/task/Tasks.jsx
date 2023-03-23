import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export default function Tasks({ taskList, setTaskList }) {
	const reorder = (list, startIndex, endIndex) => {
		const remove = list.splice(startIndex, 1);
		list.splice(endIndex, 0, remove[0]);
		return list;
	};

	const handleDragEnd = (result) => {
		//タスクを並び替える
		setTaskList(
			reorder(taskList, result.source.index, result.destination.index)
		);
	};

	return (
		<div>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{taskList.map((task, index) => (
								<div key={task.id}>
									<Task
										index={index}
										task={task}
										taskList={taskList}
										setTaskList={setTaskList}
									/>
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}
