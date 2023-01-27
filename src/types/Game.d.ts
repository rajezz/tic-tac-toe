const playerA: string = "A";
const playerB: string = "B";

export interface IBlock {
	ID: string
	providedValue: null | playerA | playerB
}

export interface IPlayer {
    ID: playerA | playerB;
    name: string;
}

export interface IGame {
    currentPlayer: playerA | playerB
}
