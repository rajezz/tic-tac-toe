import React, { useReducer } from "react";
import Block from "components/Block";
import { IPlayer, IBlock } from "types/Game";
import { initialSession } from "_data/session";
import { reducer } from 'lib/SessionReducer';
import Sidebar from "components/Sidebar"

const blocks: Array<string> = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];

export default function GameWindow() {
	const [session, sessionDispatch] = useReducer(reducer, initialSession)

	return (
		<div className="main-content">
			<Sidebar sessionDispatch={sessionDispatch} />
			<div className="game-board">
				<div className="block-section">
					{session.blocksInfo.map((val, index) => (
						<Block
							key={index}
							block={session.blocksInfo[index]}
							currentPlayer={session.currentPlayer}
						/>
					))}
				</div>
			</div>
			<div className="empty-space"></div>
		</div>
	);
}
