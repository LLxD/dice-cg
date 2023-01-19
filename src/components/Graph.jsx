import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ data }) => {
  const formattedData = data.map((dice) => {
    const diceValues = dice.split("d");
    const numberOfDice = diceValues[0];
    const diceType = diceValues[1];
    // when rolling multiple dice, the minimum possible value is the number of dice
    // when rolling a single die, the minimum possible value is 1
    const maxPossibleValue = numberOfDice * diceType;

    // for each possible value, calculate the probability of rolling that value
    // following a normal distribution if there are multiple dice
    // otherwise, the probability is 1 / diceType
    // the probability of any number being rolled is determined by a look up table

    const probabilityArray = [];
    for (let i = 1; i <= maxPossibleValue; i++) {
      let probability = 0;
      if (numberOfDice > 1) {
        probability =
          (1 / (Math.sqrt(2 * Math.PI) * diceType)) *
          Math.exp(
            -((i - numberOfDice * (diceType / 2)) ** 2) / (2 * diceType ** 2)
          );
      } else {
        probability = 1 / diceType;
      }
      probabilityArray.push({
        number: i,
        Chances: Math.round(probability * 10000) / 100,
      });
    }

    return probabilityArray;
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center">Chances</h1>
      <div className="lg:w-2/3 w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData.filter((data) => data.length > 0)[0]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="number" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar unit={"%"} dataKey="Chances" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
