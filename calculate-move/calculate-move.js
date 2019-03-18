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

module.exports = calculateMove;
