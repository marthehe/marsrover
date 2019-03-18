const setRoverPosition = ({ x, y, direction, plateu }) => {
  const newPlateu = plateu.map(item => [...item]);
  newPlateu[y][x] = { x, y, direction };

  return newPlateu;
};

module.exports = setRoverPosition;
