import React, { useState } from "react";

import { REDUCER_ACTION_UPDATE_NAME, getDefaultPlayerName } from "_data/session";
import { IPlayer } from "../../types/Game";

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

const PLAYER_ID_NAME_MAP: any = {
	A: "1",
	B: "2"
};

const PLAYER_ID_NAME_VERBAL_MAP: any = {
	A: "One",
	B: "Two"
};

const defaultPlayerName = (id: string) => `Anonymous player ${PLAYER_ID_NAME_MAP[id]}`;

interface PlayerInfoProps {
	currentPlayer: string;
	player: IPlayer;
	sessionDispatch: any;
}

export default function PlayerInfo({ currentPlayer, player, sessionDispatch }: PlayerInfoProps) {
	const [playerEditStatus, setPlayerEditStatus] = useState(false);

	const [playerName, setPlayerName] = useState(player.name);

	const playerNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerName(event.target.value);
	};

	const playerEditStatusChanged = () => {
		if (playerEditStatus) {
			//Update button clicked....
			sessionDispatch({
				type: REDUCER_ACTION_UPDATE_NAME,
				player: {
					ID: player.ID,
					name: playerName
				}
			});
		}
		setPlayerEditStatus(!playerEditStatus);
		if (playerName === "") {
			const name = getDefaultPlayerName(player.ID);
			setPlayerName(name);
			sessionDispatch({
				type: REDUCER_ACTION_UPDATE_NAME,
				player: {
					ID: player.ID,
					name
				}
			});
		}
	};

	const onKeyEnter = (e: any) => {
		if (e.key === "Enter") {
			playerEditStatusChanged();
		}
	};

	return (
		<div
			className={`player-info-panel ${
				currentPlayer === player.ID ? "currently-playing" : ""
			}`}>
			<div className="player-title">Player {PLAYER_ID_NAME_VERBAL_MAP[player.ID]}
				<span className="notification-chip">Player rolling...</span>
			</div>

			<div className="player-panel">
				<input
					type="text"
					className={"edit-name"}
					disabled={!playerEditStatus}
					value={playerName}
					onChange={playerNameChanged}
					onKeyDown={onKeyEnter}
				/>
				<button className="icon-btn" onClick={playerEditStatusChanged}>
					{playerEditStatus ? <DoneIcon /> : <EditIcon />}
				</button>
			</div>
		</div>
	);
}
