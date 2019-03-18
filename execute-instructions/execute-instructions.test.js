const executeInstructions = require("./execute-instructions");

describe("execute instructions", () => {
  describe('when newInstruction is "MM" and plateu is "1 0 N" ', () => {
    it("should change rover position to '1 2 N'", () => {
      expect(
        executeInstructions({
          instructions: "MM",
          initialPlateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ],
          plateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0, direction: "N" }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ]
        })
      ).toEqual([
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2, direction: "N" }, { x: 2, y: 2 }]
      ]);
    });
  });
  describe('when newInstruction is "LMRM" and plateu is "2 0 N" ', () => {
    it("should change rover position to '1 1 N'", () => {
      expect(
        executeInstructions({
          instructions: "LMRM",
          initialPlateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ],
          plateu: [
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0, direction: "N" }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
          ]
        })
      ).toEqual([
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
        [{ x: 0, y: 1 }, { x: 1, y: 1, direction: "N" }, { x: 2, y: 1 }],
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
      ]);
    });
  });
});
