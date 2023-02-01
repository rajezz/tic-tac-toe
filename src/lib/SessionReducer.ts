import { ISessionState } from "types/Game";

import {
	REDUCER_ACTION_UPDATE_NAME,
	REDUCER_ACTION_NEW_GAME,
	REDUCER_ACTION_CLEAR_GAME,
	REDUCER_ACTION_BLOCK_UPDATE_DATA,
	REDUCER_ACTION_DECLARE_WINNER,
	INITIAL_SESSION
} from "_data/session";

export function reducer(state: ISessionState, action: any): ISessionState {
	console.log("Reducer called....");
	console.log("Current state, action >", state, action);
	switch (action.type) {
		case REDUCER_ACTION_UPDATE_NAME:
			return {
				...state,
				playersList: state.playersList.map((t) => {
					if (t.ID === action.playerId) {
						return {
							...t,
							name: action.playerName
						};
					} else return t;
				})
			};
		case REDUCER_ACTION_NEW_GAME:
			return {
				...INITIAL_SESSION,
				gameInProgress: true,
				currentPlayer: "A",
				playersList: state.playersList
			};
		case REDUCER_ACTION_CLEAR_GAME:
			return {
				...INITIAL_SESSION,
				playersList: state.playersList
			};
		case REDUCER_ACTION_DECLARE_WINNER:
			return {
				...state,
				currentPlayer: "",
				gameInProgress: false,
				winner: action.winner
			};
		case REDUCER_ACTION_BLOCK_UPDATE_DATA:
			return {
				...state,
				iteration: ++state.iteration,
				currentPlayer: action.currentPlayer === "A" ? "B" : "A",
				blocksList: state.blocksList.map((e) => {
					if (e.ID === action.updatedBlock.ID) {
						return action.updatedBlock;
					}
					return e;
				})
			};
		default:
			return state;
	}
}
