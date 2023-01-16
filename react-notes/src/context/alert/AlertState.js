import React, { useReducer } from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../type";
import { AlertContext } from "./alertContext";
import { AlertReducer } from "./alertReducer";

export const AlertState = ({ children }) => {
	const [state, dispatch] = useReducer(AlertReducer, { visible: false });

	const show = (text, type = "warning") => {
		dispatch({
			type: SHOW_ALERT,
			playload: { text, type },
		});
	};

	const hide = () => dispatch({ type: HIDE_ALERT });

	return (
		<AlertContext.Provider
			value={{
				show,
				hide,
				alert: state,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};
