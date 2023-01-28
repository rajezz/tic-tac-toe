import React, { useState } from "react";
import PlayerInfo from "components/PlayerInfo";

const DEFAULT_PLAYER_A_NAME = "Anonymous player 1";
const DEFAULT_PLAYER_B_NAME = "Anonymous player 2";

function EditIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
			<path d="m16.208 7.604-3.75-3.771.98-1q.541-.541 1.291-.541.75 0 1.313.541l1.166 1.188q.542.521.532 1.292-.011.77-.532 1.291Zm-1.229 1.208-8.75 8.771H2.458v-3.75l8.771-8.771Z" />
		</svg>
	);
}

function DoneIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
			<path d="m9.55 18.8-6.5-6.5 2.25-2.25 4.25 4.25 9.15-9.15 2.25 2.25Z" />
		</svg>
	);
}

export default function Sidebar({ sessionDispatch }: any) {
	const [playerAEditStatus, setPlayerAEditStatus] = useState(false);
	const [playerBEditStatus, setPlayerBEditStatus] = useState(false);

	const [playerAName, setPlayerAName] = useState(DEFAULT_PLAYER_A_NAME);
	const [playerBName, setPlayerBName] = useState(DEFAULT_PLAYER_B_NAME);

	const playerANameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerAName(event.target.value);
		sessionDispatch({ })
	};
	
	const playerBNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerBName(event.target.value);
		sessionDispatch({ })
	};

	const playerAEditStatusChanged = () => {
		setPlayerAEditStatus(!playerAEditStatus);
		if (playerAName === "") {
			setPlayerAName(DEFAULT_PLAYER_A_NAME)
		}
		sessionDispatch({});
	};

	const playerBEditStatusChanged = () => {
		setPlayerBEditStatus(!playerBEditStatus);
		if (playerBName === "") {
			setPlayerBName(DEFAULT_PLAYER_B_NAME)
		}
		sessionDispatch({});
	};

	return (
		<div className="sidebar">
			<div className="action-panel">
				<button className="action-btn">New Game</button>
			</div>
			<div className="player-title">Player One</div>
			<PlayerInfo playerId={"A"} sessionDispatch={sessionDispatch} />
			{/* <div className="player-panel">
				<input
					type="text"
					name="player-a-name"
					className={`edit-name`}
					disabled={!playerAEditStatus}
					value={playerAName}
					onChange={playerANameChanged}
				/>
				<button className="icon-btn" onClick={playerAEditStatusChanged}>
					{playerAEditStatus ? <DoneIcon /> : <EditIcon />}
				</button>
			</div> */}
			<div className="player-title">Player Two</div>
			<PlayerInfo playerId={"B"} sessionDispatch={sessionDispatch} />
			{/* <div className="player-panel">
				<input
					type="text"
					name="player-b-name"
					className={`edit-name`}
					disabled={!playerBEditStatus}
					value={playerBName}
					onChange={playerBNameChanged}
				/>
				<button className="icon-btn" onClick={playerBEditStatusChanged}>
					{playerBEditStatus ? <DoneIcon /> : <EditIcon />}
				</button>
			</div> */}
		</div>
	);
}