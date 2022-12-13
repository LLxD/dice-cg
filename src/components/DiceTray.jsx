import { useState, useEffect } from "react";
import { BiPyramid } from "react-icons/bi";
import { FaDiceD6, FaDiceD20 } from "react-icons/fa";
import { GiDiceEightFacesEight, GiD10, GiD12 } from "react-icons/gi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const DiceTray = ({ diceValues, setDiceValues, diceTitle }) => {
  const [diceCount, setDiceCount] = useState(0);

  const diceIcons = {
    d4: <BiPyramid className="large-icon" />,
    d6: <FaDiceD6 className="large-icon" />,
    d8: <GiDiceEightFacesEight className="large-icon" />,
    d10: <GiD10 className="large-icon" />,
    d12: <GiD12 className="large-icon" />,
    d20: <FaDiceD20 className="large-icon" />,
  };

  useEffect(() => {
    //if the diceTitle is d4 change the first element of the array to be diceValue + d4
    if (diceTitle === "d4") {
      setDiceValues([diceCount + diceTitle, ...diceValues.slice(1)]);
    }
    //if the diceTitle is d6 change the second element of the array to be diceValue + d6
    if (diceTitle === "d6") {
      setDiceValues([
        ...diceValues.slice(0, 1),
        diceCount + diceTitle,
        ...diceValues.slice(2),
      ]);
    }
    //if the diceTitle is d8 change the third element of the array to be diceValue + d8
    if (diceTitle === "d8") {
      setDiceValues([
        ...diceValues.slice(0, 2),
        diceCount + diceTitle,
        ...diceValues.slice(3),
      ]);
    }
    //if the diceTitle is d10 change the fourth element of the array to be diceValue + d10
    if (diceTitle === "d10") {
      setDiceValues([
        ...diceValues.slice(0, 3),
        diceCount + diceTitle,
        ...diceValues.slice(4),
      ]);
    }
    //if the diceTitle is d12 change the fifth element of the array to be diceValue + d12
    if (diceTitle === "d12") {
      setDiceValues([
        ...diceValues.slice(0, 4),
        diceCount + diceTitle,
        ...diceValues.slice(5),
      ]);
    }
    //if the diceTitle is d20 change the sixth element of the array to be diceValue + d20
    if (diceTitle === "d20") {
      setDiceValues([...diceValues.slice(0, 5), diceCount + diceTitle]);
    }
  }, [diceCount]);

  return (
    <div className="grid justify-around grid-flow-col w-56 border-orange-600 gap-2 border-2 px-2 py-6 rounded">
      {diceIcons[diceTitle]}
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
