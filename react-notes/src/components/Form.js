import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
	const [value, setValue] = useState("");
	const alert = useContext(AlertContext);

	const submitHadler = (event) => {
		event.preventDefault();
		alert.show(value, "success");
	};
	return (
		<form onSubmit={submitHadler}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Write the note"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</form>
	);
};
