import { FC } from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import { getColour } from '../../helpers/getColour';

interface IPieChartProps {
  bestRank: string;
}

const PieChartComponent: FC<IPieChartProps> = ({ bestRank }) => {
  const bestRankNumber = Number(bestRank.replace(/,/g, ''));
  const rankProportion = 10000000 - bestRankNumber;
  const data = [{ name: 'Best Rank', value: rankProportion }];

  return (
    <PieChart width={800} height={400}>
      <Pie
        cornerRadius={5}
        stroke={'none'}
        data={data}
        cx={420}
        cy={200}
        startAngle={90}
        endAngle={-270}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getColour(bestRankNumber)} />
        ))}
        <Label position={'center'} style={{ fill: '#5EC26A' }}>
          {bestRank}
        </Label>
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
