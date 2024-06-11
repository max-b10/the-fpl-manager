import { FC } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { getColour } from '../../helpers/getColour';

interface IPieChartProps {
  bestRank: number;
}

const PieChartComponent: FC<IPieChartProps> = ({ bestRank }) => {
  const rankProportion = 5000000 - bestRank;
  const data = [
    { name: 'Best Rank', value: rankProportion },
    { name: 'Rest', value: 5000000 - rankProportion },
  ];

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
          {bestRank}
        </Label>
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
