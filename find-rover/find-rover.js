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

module.exports = findRover;
