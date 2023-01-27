import React from "react";
import Block from "components/Block";

const blocks: Array<string> = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];

export default function GameWindow() {
	return (
		<div className="flex flex-center">
			<div className="block-section">
				{blocks.map((index) => (
					<Block key={index} ID={index} providedValue={null} />
				))}
			</div>
		</div>
	);
}
