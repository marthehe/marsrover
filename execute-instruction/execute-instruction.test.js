const executeSingleInstruction = require("./execute-instruction");

describe("execute single instruction", () => {
  describe('when newInstruction is "M"', () => {
    it("should change rover position by y", () => {
      expect(
        executeSingleInstruction({
          instruction: "M",
          initialPlateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ],
          plateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0, direction: "W" }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ]
        })
      ).toEqual([
        [{ x: 0, y: 0, direction: "W" }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
      ]);
    });
  });
  describe('when newInstruction is "L"', () => {
    it("should change rover direction to 'S'", () => {
      expect(
        executeSingleInstruction({
          instruction: "L",
          initialPlateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ],
          plateu: [
            [{ x: 0, y: 0, direction: "W" }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ]
        })
      ).toEqual([
        [{ x: 0, y: 0, direction: "S" }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
      ]);
    });
  });
  describe('when newInstruction is "R"', () => {
    it("should change rover direction to 'W'", () => {
      expect(
        executeSingleInstruction({
          instruction: "R",
          initialPlateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ],
          plateu: [
            [{ x: 0, y: 0, direction: "S" }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ]
        })
      ).toEqual([
        [{ x: 0, y: 0, direction: "W" }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
      ]);
    });
  });
});
