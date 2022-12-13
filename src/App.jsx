import { useState } from "react";
import { Dice } from "./components/diceBox";
import DiceTray from "./components/DiceTray";

function App() {
  Dice.init().then(() => {
    // clear dice on click anywhere on the screen
    document.addEventListener("mousedown", () => {
      const diceBoxCanvas = document.getElementById("dice-canvas");
      if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
        Dice.hide().clear();
      }
    });
  });

  const rollDice = (diceValues) => {
    //for each dice value in the array, roll the dice if the value is bigger than 0
    diceValues.forEach((diceValue) => {
      if (diceValue[0] > 0) {
        Dice.show().roll(diceValue);
      }
    });
  };

  const [diceValues, setDiceValues] = useState([
    "0d4",
    "0d6",
    "0d8",
    "0d10",
    "0d12",
    "0d20",
  ]);

  return (
    <div className="grid items-center justify-center h-screen">
      <div className="grid  gap-10">
        <h1 className="text-6xl text-center">Rolagem de Dados</h1>

        <div className="grid gap-4">
          <div className="grid gap-2 grid-flow-col">
            <DiceTray
              diceTitle="d4"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
            <DiceTray
              diceTitle="d6"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
            <DiceTray
              diceTitle="d8"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
          </div>
          <div className="grid gap-2 grid-flow-col">
            <DiceTray
              diceTitle="d10"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
            <DiceTray
              diceTitle="d12"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
            <DiceTray
              diceTitle="d20"
              diceValues={diceValues}
              setDiceValues={setDiceValues}
            />
          </div>
        </div>
        <button
          className="mx-auto border rounded py-2 px-4 bg-orange-600 w-48 text-white"
          onClick={() => rollDice(diceValues)}
        >
          Rolar dados
        </button>
      </div>

      <div id="dice-box"></div>
    </div>
  );
}

export default App;
