import { ISessionState } from "types/Game";

import { REDUCER_ACTION_UPDATE_NAME } from "_data/session";

export function reducer(state: ISessionState, action: any) {
    console.log("Reducer called....");
    console.log("Current state >", state);
    switch (action.type) {
        case REDUCER_ACTION_UPDATE_NAME:
            return {
                ...state, playersInfo: state.playersInfo.map((t) => {
                    if (t.ID === action.playerId) {
                        return {
							...t,
							name: action.playerName
						};
                    } else return t;
            })};
		default:
			return state;
	}
}
