import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';
import { FC } from 'react';
import { ICurrent } from '../../types/manager/managerHistory';
import { CustomTooltip } from '../CustomTooltip';
import { IEvent } from '../../types/general/event';

interface IGameweekLineChartProps {
  playerGameweekData: ICurrent[];
  generalGameweekData: IEvent[];
  totalPoints: string;
  playerName: string;
}

const GameweekLineChart: FC<IGameweekLineChartProps> = ({
  playerGameweekData,
  generalGameweekData,
  totalPoints,
  playerName,
}) => {
  const series = [
    {
      name: playerName,
      data: playerGameweekData.map((item) => ({
        category: item.event,
        value: item.points,
      })),
    },
    {
      name: 'Average',
      data: generalGameweekData.map((item) => ({
        category: item.id,
        value: item.average_entry_score,
      })),
    },
  ];
  let tickCount = 0;

  const tickFormatter = (tick: string) => {
    tickCount += 1;
    return tickCount % 2 === 0 ? tick : '';
  };
  return (
    <div className="w-full">
      <Card className="border border-primary">
        <CardHeader className="flex flex-row justify-between px-7">
          <div>
            <CardTitle className="mb-1">Gameweek History</CardTitle>
            <CardDescription>
              How often do you beat the average?
            </CardDescription>
          </div>
          <div>
            <CardTitle>{totalPoints}</CardTitle>
            <CardDescription>Total pts</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer>
              <LineChart width={500} height={300}>
                <XAxis
                  dataKey="category"
                  type="category"
                  allowDuplicatedCategory={false}
                  tickFormatter={tickFormatter}
                />
                <YAxis dataKey="value" />
                <Tooltip content={<CustomTooltip playerName={playerName} />} />
                <Legend />
                {series.map((s) => (
                  <Line
                    dataKey="value"
                    data={s.data}
                    name={s.name}
                    key={s.name}
                    stroke={s.name === playerName ? '#22C55E' : '#A3A8B1'}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameweekLineChart;
