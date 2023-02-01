import React, { useState } from "react";
import PlayerInfo from "components/PlayerInfo";
import { REDUCER_ACTION_NEW_GAME, REDUCER_ACTION_CLEAR_GAME } from "_data/session";
import { clearCriteria } from "lib/gameMechanics";
import { IPlayer } from "../../types/Game";

interface SidebarProps {
	currentPlayer: string;
	gameInProgress: boolean;
	playerList: Array<IPlayer>;
	sessionDispatch: any;
}

export default function Sidebar({ currentPlayer, playerList, gameInProgress, sessionDispatch }: SidebarProps) {

	const newGameBtnClicked = () => {
		sessionDispatch({
			type: gameInProgress ? REDUCER_ACTION_CLEAR_GAME : REDUCER_ACTION_NEW_GAME
		});
		clearCriteria();
	};
	return (
		<div className="sidebar">
			<div className="action-panel">
				<button className="action-btn full-width" onClick={newGameBtnClicked}>
					{gameInProgress ? "Clear Game" : "New Game"}
				</button>
			</div>
			{playerList.map((e) => (
				<PlayerInfo
					key={e.ID}
					currentPlayer={currentPlayer}
					player={e}
					sessionDispatch={sessionDispatch}
				/>
			))}
		</div>
	);
}
