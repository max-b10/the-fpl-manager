import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FC } from 'react';
import { stringToNumber } from '../../helpers/stringToNumber';
import { SeasonTooltip } from '../Tooltips/SeasonTooltip';

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
    <div className="h-full w-full">
      <ResponsiveContainer>
        <BarChart
          data={modifiedData}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 10,
          }}
        >
          <XAxis
            label={{
              value: 'Season',
              position: 'insideBottom',
              offset: -10,
              height: 70,
            }}
            dataKey="season_name"
            tickFormatter={(season_name) => `${season_name.slice(2)}`}
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                dy={5}
                textAnchor="middle"
                fill="#666"
                fontSize={10}
              >
                {payload.value.slice(2)}
              </text>
            )}
          />
          <YAxis
            tickFormatter={(value) => {
              return `${value / 1000}k`;
            }}
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) => {
              if (active && payload && payload[0]) {
                return (
                  <SeasonTooltip
                    season={payload[0].payload.season_name}
                    rank={payload[0].payload.rank}
                    total_points={payload[0].payload.total_points}
                  />
                );
              }
              return null;
            }}
          />
          <Bar
            name={'Season'}
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
