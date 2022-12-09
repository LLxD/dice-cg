import { useState, useEffect } from "react";
import { BiPyramid } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const DiceTray = ({ diceValues, setDiceValues }) => {
  const [diceCount, setDiceCount] = useState(1);

  useEffect(() => {
    //change the first element of the diceValue array to diceCount+"d4"
    setDiceValues([diceCount + "d4", ...diceValues.slice(1)]);
  }, [diceCount]);

  return (
    <div className="grid justify-around grid-flow-col w-56 border-orange-600 gap-2 border-2 px-2 py-6 rounded">
      <BiPyramid className="large-icon" />
      <div className="grid grid-flow-col gap-2 w-24 justify-evenly">
        <button onClick={() => setDiceCount(diceCount + 1)}>
          <AiOutlinePlusCircle className="icon" />
        </button>
        <input
          className=" outline-none text-2xl w-10 bg-transparent text-white text-center"
          placeholder="1"
          readOnly
          value={diceCount}
          onChange={(e) => setDiceCount(e.target.value)}
        />
        <button onClick={() => setDiceCount(diceCount - 1)}>
          <AiOutlineMinusCircle className="icon" />
        </button>
      </div>
    </div>
  );
};

export default DiceTray;
