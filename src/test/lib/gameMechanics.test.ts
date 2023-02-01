import { expect } from "chai";
import { findWinner, clearCriteria } from "../../lib/gameMechanics";
const AWinBlockList = [
	{ ID: "00", providedValue: "A" },
	{ ID: "01", providedValue: "" },
	{ ID: "02", providedValue: "B" },
	{ ID: "10", providedValue: "B" },
	{ ID: "11", providedValue: "A" },
	{ ID: "12", providedValue: "" },
	{ ID: "20", providedValue: "" },
	{ ID: "21", providedValue: "" },
	{ ID: "22", providedValue: "A" }
];
const BWinBlockList = [
	{ ID: "00", providedValue: "B" },
	{ ID: "01", providedValue: "B" },
	{ ID: "02", providedValue: "B" },
	{ ID: "10", providedValue: "A" },
	{ ID: "11", providedValue: "A" },
	{ ID: "12", providedValue: "" },
	{ ID: "20", providedValue: "" },
	{ ID: "21", providedValue: "" },
	{ ID: "22", providedValue: "A" }
];
const IncompleteBlockList = [
	{ ID: "00", providedValue: "B" },
	{ ID: "01", providedValue: "A" },
	{ ID: "02", providedValue: "B" },
	{ ID: "10", providedValue: "A" },
	{ ID: "11", providedValue: "A" },
	{ ID: "12", providedValue: "" },
	{ ID: "20", providedValue: "B" },
	{ ID: "21", providedValue: "" },
	{ ID: "22", providedValue: "A" }
];

describe("gameMechanics", () => {
	beforeEach(() => {
		clearCriteria();
	});
	it("'A' should be the winner", () => {
		const [status, winner] = findWinner(AWinBlockList);
		expect(status).to.equal(true);
		expect(winner).to.equal("A");
	});
	it("'B' should be the winner", () => {
		const [status, winner] = findWinner(BWinBlockList);
		expect(status).to.equal(true);
		expect(winner).to.equal("B");
	});
	it("Should return false", () => {
		const [status, winner] = findWinner(IncompleteBlockList);
		expect(status).to.equal(false);
	});
});
