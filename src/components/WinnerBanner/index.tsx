import React from "react";
import { clearCriteria } from "lib/gameMechanics";
import { REDUCER_ACTION_NEW_GAME } from "_data/session";

interface WinnerBannerProps {
	winner: string;
	sessionDispatch: any;
}

export default function WinnerBanner({ winner, sessionDispatch }: WinnerBannerProps) {
	const newGameBtnClicked = () => {
		sessionDispatch({ type: REDUCER_ACTION_NEW_GAME });
		clearCriteria();
	};
	return (
		<div className="winner-overlay">
			<div className="modal-panel">
				<div className="announcement-panel">
					<span className="winner-name">{winner}</span> won the match 🎉
				</div>
				<button className="transparent action-btn" onClick={newGameBtnClicked}>
					New Game
				</button>
			</div>
		</div>
	);
}
