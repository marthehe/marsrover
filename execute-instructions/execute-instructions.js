const executeSingleInstruction = require("../execute-instruction/execute-instruction");

const executeInstructions = ({ instructions, plateu, initialPlateu }) => {
  let finalPlateu = plateu.map(item => [...item]);

  instructions.split("").forEach(instruction => {
    finalPlateu = executeSingleInstruction({
      instruction,
      plateu: finalPlateu,
      initialPlateu
    });
  });

  return finalPlateu;
};

module.exports = executeInstructions;
