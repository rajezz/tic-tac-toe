import React, { useState } from "react";
import PlayerInfo from "components/PlayerInfo";

export default function Sidebar({ sessionDispatch }: any) {
	return (
		<div className="sidebar">
			<div className="action-panel">
				<button className="action-btn">New Game</button>
			</div>
			<div className="player-title">Player One</div>
			<PlayerInfo playerId={"A"} sessionDispatch={sessionDispatch} />
			<div className="player-title">Player Two</div>
			<PlayerInfo playerId={"B"} sessionDispatch={sessionDispatch} />
		</div>
	);
}