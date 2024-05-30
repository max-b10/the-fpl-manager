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
import { Card, CardContent } from '../../UI/organisms/Card';

interface ISeasonBarChartProps {
  pastSeasonsData: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
}

const SeasonBarChart: FC<ISeasonBarChartProps> = ({ pastSeasonsData }) => {
  const modifiedData = pastSeasonsData.map((season) => ({
    ...season,
    season_name: season.season_name.slice(2),
  }));
  return (
    <div className="w-full">
      <Card className="border border-primary">
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={modifiedData}
                margin={{
                  top: 25,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="season_name"
                  tick={({ x, y, payload }) => (
                    <text
                      x={x}
                      y={y}
                      dy={16}
                      textAnchor="middle"
                      fill="#666"
                      fontSize={10}
                    >
                      {payload.value}
                    </text>
                  )}
                />
                <YAxis />
                <Tooltip shared={false} trigger="click" />
                <Legend />
                <Bar
                  dataKey={(data) => stringToNumber(data.rank)}
                  fill="#22C55E"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SeasonBarChart;
