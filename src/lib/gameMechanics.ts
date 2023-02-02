import { IBlock } from "types/Game";
import { IMPROBABILITY_CHECK_REGEX, WINNING_STRIKE_PROBABILITY } from "_data/session";

let checkCritieria = [...WINNING_STRIKE_PROBABILITY];

export function clearCriteria() {
	checkCritieria = [...WINNING_STRIKE_PROBABILITY];
}

export function findWinner(blockList: Array<IBlock>): Array<any> {
	let whoWon: string = "";
    checkCritieria.forEach((indexes, currentIndex) => {
        console.log("indexes > ", indexes);
		const valuesStr: string = indexes.reduce((acc, i) => `${acc}${blockList[i]["providedValue"]}`, "");
		console.log("valueStr > ", valuesStr);
		if (IMPROBABILITY_CHECK_REGEX.test(valuesStr)) {
            delete checkCritieria[currentIndex];
            console.log("Mixed content");
		} else if (valuesStr === "AAA") {
            whoWon = "A";
            console.log("A won");
		} else if (valuesStr === "BBB") {
            whoWon = "B";
            console.log("B won");
		}
	});
	checkCritieria = checkCritieria.filter((e) => e !== null);
	switch (whoWon) {
		case "A":
			return [true, "A"];
		case "B":
			return [true, "B"];
		default:
			return [false];
	}
}
