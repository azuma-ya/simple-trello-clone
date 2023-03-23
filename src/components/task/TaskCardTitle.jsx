import React, { useState } from "react";

export default function TaskCardTitle() {
	const [isClick, setIsClick] = useState(false);
	const [inputCardTitle, setInputCardTitle] = useState("Today");

	const handleClick = () => {
		setIsClick(true);
	};

	const handleChange = (e) => {
		setInputCardTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsClick(false);
	};

	const handleBlur = () => {
		setIsClick(false);
	};

	return (
		<div onClick={handleClick} className="TaskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input
						className="TaskCardTitleInput"
						autoFocus
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						value={inputCardTitle}
						maxLength="15"
					/>
				</form>
			) : (
				<h2>{inputCardTitle}</h2>
			)}
		</div>
	);
}
