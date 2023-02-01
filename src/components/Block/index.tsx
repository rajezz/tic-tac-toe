import React from "react";

// types
import { IBlock } from "types/Game";
import { REDUCER_ACTION_BLOCK_UPDATE_DATA } from "_data/session";
import { ISessionState } from "../../types/Game";

interface BlockProps {
	session: ISessionState;
	block: IBlock;
	sessionDispatch: any;
}

function CloseIcon() {
	return (
		<svg className="close-icon" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
			<path d="m10.458 32.625-3.083-3.083L16.917 20l-9.542-9.542 3.083-3.083 9.542 9.5 9.542-9.5 3.083 3.083L23.083 20l9.542 9.542-3.083 3.083L20 23.083Z" />
		</svg>
	);
}

function CircleIcon() {
	return (
		<svg className="circle-icon" xmlns="http://www.w3.org/2000/svg" height="40" width="40">
			<path d="M20 37.875q-3.708 0-6.979-1.375t-5.709-3.812Q4.875 30.25 3.5 26.979 2.125 23.708 2.125 20T3.5 13.021Q4.875 9.75 7.312 7.312q2.438-2.437 5.709-3.833Q16.292 2.083 20 2.083t6.979 1.396q3.271 1.396 5.709 3.833 2.437 2.438 3.833 5.709 1.396 3.271 1.396 6.979t-1.396 6.979q-1.396 3.271-3.833 5.709-2.438 2.437-5.709 3.812-3.271 1.375-6.979 1.375Zm0-4.417q5.625 0 9.542-3.916 3.916-3.917 3.916-9.542t-3.916-9.542Q25.625 6.542 20 6.542t-9.542 3.916Q6.542 14.375 6.542 20t3.916 9.542q3.917 3.916 9.542 3.916ZM20 20Z" />
		</svg>
	);
}

export default function Block({ session, block, sessionDispatch }: BlockProps) {
	const UserInputProvided = () => {
		sessionDispatch({ type: REDUCER_ACTION_BLOCK_UPDATE_DATA, updatedBlock: {ID: block.ID, providedValue: session.currentPlayer }, currentPlayer: session.currentPlayer });
		// inputProvided(currentPlayer, block.ID);
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
