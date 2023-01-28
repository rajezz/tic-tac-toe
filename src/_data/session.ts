import { ISessionState } from "types/Game";

export const REDUCER_ACTION_UPDATE_NAME = "UPDATE-NAME";

export const initialSession: ISessionState = {
	gameInProgress: false,
	currentPlayer: null,
	playersInfo: [
		{
			ID: "A",
			name: ""
		},
		{
			ID: "B",
			name: ""
		}
	],
	blocksInfo: [
		{
			ID: "00",
			providedValue: ""
		},
		{
			ID: "01",
			providedValue: ""
		},
		{
			ID: "02",
			providedValue: ""
		},
		{
			ID: "10",
			providedValue: ""
		},
		{
			ID: "11",
			providedValue: ""
		},
		{
			ID: "12",
			providedValue: ""
		},
		{
			ID: "20",
			providedValue: ""
		},
		{
			ID: "21",
			providedValue: ""
		},
		{
			ID: "22",
			providedValue: ""
		},
	]
};