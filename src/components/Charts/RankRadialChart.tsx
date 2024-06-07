import { RadialBar, RadialBarChart } from 'recharts';
interface IRankRadialChartProps {
  bestRank?: number;
}

const RankRadialChart: React.FC<IRankRadialChartProps> = ({ bestRank }) => {
  console.log(bestRank);
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={[{ uv: 8001 }]}
    >
      <RadialBar
        label={{ position: 'insideStart', fill: '#e42a32' }}
        background
        dataKey="uv"
      />
    </RadialBarChart>
  );
};
export default RankRadialChart;
