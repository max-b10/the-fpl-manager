import { FC } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { getColour } from '../../helpers/getColour';

interface IPieChartProps {
  bestRank: number;
}

const TOTAL_RANKS = 10000000;

const PieChartComponent: FC<IPieChartProps> = ({ bestRank }) => {
  const rankProportion = TOTAL_RANKS - bestRank;
  const data = [
    { name: 'Best Rank', value: rankProportion },
    { name: 'Rest', value: TOTAL_RANKS - rankProportion },
  ];
  const formattedBestRank = bestRank.toLocaleString();

  return (
    <PieChart width={200} height={200}>
      <Pie
        cornerRadius={5}
        stroke={'none'}
        data={data}
        startAngle={90}
        endAngle={-270}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === 0 ? getColour(bestRank) : 'transparent'}
          />
        ))}
        <Label position={'center'} style={{ fill: '#fff' }}>
          {formattedBestRank}
        </Label>
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
