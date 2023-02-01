import { ISessionState } from "types/Game";

export const REDUCER_ACTION_UPDATE_NAME = "UPDATE-NAME";
export const REDUCER_ACTION_NEW_GAME = "NEW-GAME";
export const REDUCER_ACTION_CLEAR_GAME = "CLEAR-GAME";
export const REDUCER_ACTION_BLOCK_UPDATE_DATA = "UPDATE-BLOCK-DATA";
export const REDUCER_ACTION_DECLARE_WINNER = "DECLARE-WINNER";


const PLAYER_ID_NAME_MAP: any = {
	A: "1",
	B: "2"
};

export const getDefaultPlayerName = (id: string) => `Anonymous player ${PLAYER_ID_NAME_MAP[id]}`;

export const DEFAULT_BLOCK_LIST = [
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
];
export const INITIAL_SESSION: ISessionState = {
	gameInProgress: false,
	iteration: 0,
	winner: "",
	currentPlayer: "",
	playersList: [
		{
			ID: "A",
			name: getDefaultPlayerName("A")
		},
		{
			ID: "B",
			name: getDefaultPlayerName("B")
		}
	],
	blocksList: DEFAULT_BLOCK_LIST
};