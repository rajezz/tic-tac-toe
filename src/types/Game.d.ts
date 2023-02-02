export interface IBlock {
	ID: string;
	providedValue: "" | "A" | "B";
}

export interface IPlayer {
	ID: "A" | "B";
	name: string;
}

export interface IGame {
	currentPlayer: "" | "A" | "B";
}

export interface ISessionState {
	gameInProgress: boolean;
	iteration: number;
	winner: string;
	currentPlayer: string;
	playersList: Array<IPlayer>;
	blocksList: Array<IBlock>;
}
