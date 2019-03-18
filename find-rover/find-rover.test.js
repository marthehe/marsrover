const findRover = require("./find-rover");

test("finds rover position correctly", () => {
  const plateu = [
    [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0, direction: "N" },
      { x: 3, y: 0 }
    ],
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
  ];
  expect(findRover(plateu)).toEqual({ x: 2, y: 0, direction: "N" });
});
