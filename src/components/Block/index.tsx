import React from "react";

// Components...
import { CloseIcon, CircleIcon } from "components/Icon";

// Types...
import { IBlock, ISessionState } from "types/Game";

// Data source...
import { REDUCER_ACTION_BLOCK_UPDATE_DATA } from "_data/session";

interface BlockProps {
	session: ISessionState;
	block: IBlock;
	sessionDispatch: any;
}

export default function Block({ session, block, sessionDispatch }: BlockProps) {
	const UserInputProvided = () => {
		sessionDispatch({ type: REDUCER_ACTION_BLOCK_UPDATE_DATA, updatedBlock: {ID: block.ID, providedValue: session.currentPlayer }, currentPlayer: session.currentPlayer });
	};

	const displayIcon = () => {
		if (block.providedValue != "") {
			switch (block.providedValue) {
				case "A":
				return <CloseIcon />;
				case "B":
				return <CircleIcon />;
			}
		} else {
			switch (session.currentPlayer) {
				case "A":
					return <CloseIcon />;
				case "B":
					return <CircleIcon />;
			}
			
		}
	};
	return (
		<button
			className={`block ${session.currentPlayer}`}
			disabled={block.providedValue !== "" || !session.gameInProgress}
			onClick={UserInputProvided}>
			<span className="current-player-icon">
				{displayIcon()}
			</span>
		</button>
	);
}
