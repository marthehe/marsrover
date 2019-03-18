const calculateMoveLeft = direction => {
  if (direction === "N") {
    return "W";
  } else if (direction === "W") {
    return "S";
  } else if (direction === "S") {
    return "E";
  } else if (direction === "E") {
    return "N";
  }
};

const calculateMoveRight = direction => {
  if (direction === "N") {
    return "E";
  } else if (direction === "E") {
    return "S";
  } else if (direction === "S") {
    return "W";
  } else if (direction === "W") {
    return "N";
  }
};

const calculateMoveForward = ({ x, y, direction }) => {
  if (direction === "N") {
    return {
      x,
      y: y + 1
    };
  } else if (direction === "E") {
    return {
      x: x + 1,
      y
    };
  } else if (direction === "S") {
    return {
      x,
      y: y - 1
    };
  } else if (direction === "W") {
    return {
      x: x - 1,
      y
    };
  }
};

const calculateMove = ({ x, y, direction, newInstruction }) => {
  let newDirection;
  if (newInstruction === "M") {
    newDirection = calculateMoveForward({ x, y, direction });
    return {
      direction,
      x: newDirection.x,
      y: newDirection.y
    };
  } else if (newInstruction === "L") {
    newDirection = calculateMoveLeft(direction);
  } else if (newInstruction === "R") {
    newDirection = calculateMoveRight(direction);
  }

  return {
    x,
    y,
    direction: newDirection
  };
};

const plateu = [
  [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 }
  ],
  [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  [
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 5, y: 2 }
  ],
  [
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 }
  ],
  [
    { x: 0, y: 4 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 4 }
  ]
];

const setRoverPosition = (x, y, direction) => {
  const newPlateu = plateu.map(item => [...item]);
  newPlateu[x][y] = { x, y, direction };
  return newPlateu;
};

const findRover = plateu => {
  let rover = {};
  plateu.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell.direction) {
        rover = plateu[rowIndex][cellIndex];
      }
    });
  });
  return rover;
};

const executeSingleInstruction = (instruction, plateu) => {
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
  const newPlateu = setRoverPosition({ x, y, direction });
  return newPlateu;
};

const executeInstructions = (instructions, plateu, initialPlateu) => {
  let finalPlateu = [];
  instructions.split("").forEach(instruction => {
    finalPlateu = executeSingleInstruction(instruction, plateu, initialPlateu);
  });
  return finalPlateu;
};

// 1. Set initial rover positon
const currentPlateu = setRoverPosition(3, 3, "E");
// 2. Execute rover instructions
// executeInstructions("LRMLLRMM", initialPlateu);
console.log(
  'TCL: executeInstructions("MMRMMRMRRM", initialPlateu);',
  executeInstructions("MMRMMRMRRM", currentPlateu, plateu)
);
