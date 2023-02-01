import React, { useReducer, useEffect } from "react";
import Block from "components/Block";
import { IPlayer, IBlock } from "types/Game";
import { INITIAL_SESSION, REDUCER_ACTION_DECLARE_WINNER } from "_data/session";
import { reducer } from "lib/SessionReducer";
import Sidebar from "components/Sidebar";
import { findWinner } from "../../lib/gameMechanics";
import WinnerBanner from "components/WinnerBanner";


export default function GameWindow() {
	const [session, sessionDispatch] = useReducer(reducer, INITIAL_SESSION);

	const inputProvided = (playerId: string, selectedLocation: string) => {};

	useEffect(() => {
		console.log("Board updated!!", session.iteration, session.blocksList);
		if (session.iteration > 4) {
			const [gameWon, winnerId] = findWinner(session.blocksList);
			if (gameWon) {
				const winner = session.playersList.find((e) => e.ID === winnerId)?.name;
				sessionDispatch({ type: REDUCER_ACTION_DECLARE_WINNER, winner });
			}
		}
	}, [session.blocksList]);

	return (
		<div className="main-content">
			{session.winner !== "" ? (
				<WinnerBanner winner={session.winner} sessionDispatch={sessionDispatch} />
			) : (
				""
			)}
			<Sidebar
				currentPlayer={session.currentPlayer}
				gameInProgress={session.gameInProgress}
				sessionDispatch={sessionDispatch}
			/>
			<div className="game-board">
				<div className="block-section">
					{session.blocksList.map((val, index) => (
						<Block
							key={index}
							session={session}
							block={session.blocksList[index]}
							sessionDispatch={sessionDispatch}
						/>
					))}
				</div>
			</div>
			<div className="empty-space"></div>
		</div>
	);
}
