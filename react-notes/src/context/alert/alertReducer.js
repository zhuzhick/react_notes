import { HIDE_ALERT, SHOW_ALERT } from "../type";

const handlers = {
	DEFAULT: (state) => state,
	[SHOW_ALERT]: (state, { playload }) => ({ ...playload, visible: true }),
	[HIDE_ALERT]: (state) => ({ ...state, visible: false }),
};

export const AlertReducer = (state, action) => {
	const handle = handlers[action.type || handlers.DEFAULT];
	return handle(state, action);
};
