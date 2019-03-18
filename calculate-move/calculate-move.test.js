const calculateMove = require("./calculate-move");

describe("calculateMove:", () => {
  describe('when newInstruction is "R"', () => {
    it('should change rover directon from "N" to "E"', () => {
      expect(
        calculateMove({
          x: 1,
          y: 1,
          direction: "N",
          newInstruction: "R"
        })
      ).toEqual({
        x: 1,
        y: 1,
        direction: "E"
      });
    });
    it('should change rover directon from "E" to "S"', () => {
      expect(
        calculateMove({
          x: 0,
          y: 1,
          direction: "E",
          newInstruction: "R"
        })
      ).toEqual({
        x: 0,
        y: 1,
        direction: "S"
      });
    });
    it('should change rover directon from "S" to "W"', () => {
      expect(
        calculateMove({
          x: 2,
          y: 1,
          direction: "S",
          newInstruction: "R"
        })
      ).toEqual({
        x: 2,
        y: 1,
        direction: "W"
      });
    });
    it('should change rover directon from "S" to "N"', () => {
      expect(
        calculateMove({
          x: 0,
          y: 1,
          direction: "W",
          newInstruction: "R"
        })
      ).toEqual({
        x: 0,
        y: 1,
        direction: "N"
      });
    });

    describe('when newInstruction is "L"', () => {
      it('should change rover directon from "N" to "W"', () => {
        expect(
          calculateMove({
            x: 1,
            y: 1,
            direction: "N",
            newInstruction: "L"
          })
        ).toEqual({
          x: 1,
          y: 1,
          direction: "W"
        });
      });
      it('should change rover directon from "W" to "S"', () => {
        expect(
          calculateMove({
            x: 0,
            y: 1,
            direction: "W",
            newInstruction: "L"
          })
        ).toEqual({
          x: 0,
          y: 1,
          direction: "S"
        });
      });
      it('should change rover directon from "S" to "E"', () => {
        expect(
          calculateMove({
            x: 2,
            y: 1,
            direction: "S",
            newInstruction: "L"
          })
        ).toEqual({
          x: 2,
          y: 1,
          direction: "E"
        });
      });
      it('should change rover directon from "E" to "N"', () => {
        expect(
          calculateMove({
            x: 0,
            y: 1,
            direction: "E",
            newInstruction: "L"
          })
        ).toEqual({
          x: 0,
          y: 1,
          direction: "N"
        });
      });
    });
    describe('when newInstruction is "M"', () => {
      it("should move rover position by y", () => {
        expect(
          calculateMove({
            x: 1,
            y: 1,
            direction: "N",
            newInstruction: "M"
          })
        ).toEqual({
          x: 1,
          y: 2,
          direction: "N"
        });
      });
      it("should move rover position by x", () => {
        expect(
          calculateMove({
            x: 0,
            y: 1,
            direction: "W",
            newInstruction: "M"
          })
        ).toEqual({
          x: -1,
          y: 1,
          direction: "W"
        });
      });
      it("should move rover position by y", () => {
        expect(
          calculateMove({
            x: 2,
            y: 1,
            direction: "S",
            newInstruction: "M"
          })
        ).toEqual({
          x: 2,
          y: 0,
          direction: "S"
        });
      });
      it("should move rover position by x", () => {
        expect(
          calculateMove({
            x: 0,
            y: 1,
            direction: "E",
            newInstruction: "M"
          })
        ).toEqual({
          x: 1,
          y: 1,
          direction: "E"
        });
      });
    });
  });
});
