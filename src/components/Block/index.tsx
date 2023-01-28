import React from "react";

// types
import { IBlock } from "types/Game";

interface BlockProps {
	block: IBlock;
	currentPlayer: string;
}

export default function Block({ block, currentPlayer }: BlockProps) {
	return <div className={`block ${currentPlayer}`}></div>;
}
