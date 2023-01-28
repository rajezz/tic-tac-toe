const playerA: string = "A";
const playerB: string = "B";

export interface IBlock {
	ID: string;
	providedValue: "" | playerA | playerB;
}

export interface IPlayer {
	ID: playerA | playerB;
	name: string;
}

export interface IGame {
	currentPlayer: "" | playerA | playerB;
}

export interface ISessionState {
	gameInProgress: boolean;
	currentPlayer: any;
	playersInfo: Array<IPlayer>;
	blocksInfo: Array<IBlock>;
}
