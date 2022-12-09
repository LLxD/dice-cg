import { useState, useEffect } from "react";
import DiceBox from "@3d-dice/dice-box";
import DiceTray from "./components/DiceTray";

function App() {
  let DiceBoxInstance;

  useEffect(() => {
    DiceBoxInstance = new DiceBox(
      "#dice-box", // target DOM element to inject the canvas for rendering
      {
        id: "dice-canvas", // canvas element id
        assetPath: "/assets/dice-box/",
        startingHeight: 8,
        throwForce: 6,
        spinForce: 5,
        lightIntensity: 0.9,
        scale: 5,
      }
    );
    DiceBoxInstance.init().then(() => {
      // clear dice on click anywhere on the screen
      document.addEventListener("mousedown", () => {
        const diceBoxCanvas = document.getElementById("dice-canvas");
        if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
          DiceBoxInstance.hide().clear();
        }
      });
    });
  }, []);

  const rollDice = (diceValues) => {
    // trigger the dice roll
    debugger;
    DiceBoxInstance.show().roll(["1d4"]);
  };

  const [diceValues, setDiceValues] = useState(["1d4"]);

  return (
    <div className="grid items-center justify-center h-screen">
      <div className="grid gap-10">
        <h1 className="text-6xl">Rolagem de Dados</h1>
        <button
          className="mx-auto border rounded py-2 px-4 bg-orange-600 w-48 text-white"
          onClick={() => rollDice(diceValues)}
        >
          Rolar dados
        </button>
        <DiceTray diceValues={diceValues} setDiceValues={setDiceValues} />
      </div>
      <div id="dice-box"></div>
    </div>
  );
}

export default App;
