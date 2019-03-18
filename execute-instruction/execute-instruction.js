const setRoverPosition = require("../set-rover-position/set-rover-position");
const findRover = require("../find-rover/find-rover");
const calculateMove = require("../calculate-move/calculate-move");

const executeSingleInstruction = ({ instruction, plateu, initialPlateu }) => {
  // 1. Find Rover
  const rover = findRover(plateu);
  // 2. Caluclate Move
  const newRoverPosition = calculateMove({
    x: rover.x,
    y: rover.y,
    direction: rover.direction,
    newInstruction: instruction
  });
  // 3. Set Rover Positon
  const { x, y, direction } = newRoverPosition;
  const newPlateu = setRoverPosition({
    x,
    y,
    direction,
    plateu: initialPlateu
  });
  return newPlateu;
};

module.exports = executeSingleInstruction;
