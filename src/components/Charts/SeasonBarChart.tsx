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
import { CardHeader, CardTitle } from '../../UI/organisms/Card';

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
    <div className="flex h-full w-full flex-col justify-center">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Rank History
          </CardTitle>
        </div>
      </CardHeader>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={modifiedData}
            margin={{
              top: 5,
              right: 50,
              left: 50,
              bottom: 0,
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
            <YAxis name={'Rank'} values="data" />
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
    </div>
  );
};

export default SeasonBarChart;
