import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FC } from 'react';
import { stringToNumber } from '../../helpers/stringToNumber';
interface ISeasonBarChartProps {
  pastSeasonsData: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
}

const SeasonBarChart: FC<ISeasonBarChartProps> = ({ pastSeasonsData }) => {
  const currentYear = new Date().getFullYear();
  const startYear = 2009;
  const numSeasons = currentYear - startYear;

  const allSeasons = Array.from({ length: numSeasons }, (_, i) => {
    const year = startYear + i;
    return {
      season_name: `${year}/${String(year + 1).slice(2)}`,
      total_points: '0',
      rank: '0',
    };
  });

  const modifiedData = allSeasons.map((season) => {
    const playerData = pastSeasonsData.find(
      (data) => data.season_name === season.season_name
    );
    return playerData || season;
  });
  return (
    <div className="flex h-full w-full justify-center">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={modifiedData}
          margin={{
            top: 85,
            right: 50,
            left: 50,
            bottom: 15,
          }}
        >
          <XAxis
            dataKey="season_name"
            tickFormatter={(season_name) => `${season_name.slice(2)}`}
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                dy={16}
                textAnchor="middle"
                fill="#666"
                fontSize={10}
              >
                {payload.value.slice(2)}
              </text>
            )}
          />
          <YAxis values="data" />
          <Tooltip shared={false} trigger="click" />
          <Legend />
          <Bar
            name={'Rank'}
            dataKey={(data) => stringToNumber(data.rank)}
            fill="#22C55E"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SeasonBarChart;
