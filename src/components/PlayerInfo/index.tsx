import React, { useState } from "react";

// Components...
import { EditIcon, DoneIcon, CircleIcon, CloseIcon } from "components/Icon";

// Data source...
import { REDUCER_ACTION_UPDATE_NAME, getDefaultPlayerName } from "_data/session";

// Types...
import { IPlayer } from "types/Game";

const playerIcons: any = {
	"A": CloseIcon,
	"B": CircleIcon
};

const dispatchPlayerIcon = (id: string): JSX.Element => {
	const Icon = playerIcons[id];
	return <Icon size={20} />;
}; 

const PLAYER_ID_NAME_VERBAL_MAP: any = {
	A: "One",
	B: "Two"
};

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
			<div className="player-title">
				<span className="text">Player {PLAYER_ID_NAME_VERBAL_MAP[player.ID]}</span>
				<div className="player-icon-panel">{dispatchPlayerIcon(player.ID)}</div>
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
