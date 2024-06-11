import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { FC } from 'react';
import { ICurrent } from '../../types/manager/managerHistory';
import { GameweekTooltip } from '../Tooltips/GameweekTooltip';
import { IEvent } from '../../types/general/event';

interface IGameweekLineChartProps {
  playerGameweekData: ICurrent[];
  generalGameweekData: IEvent[];
  totalPoints: number;
  playerName: string;
}

const GameweekLineChart: FC<IGameweekLineChartProps> = ({
  playerGameweekData,
  generalGameweekData,
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
    <div className="h-full w-full">
      <ResponsiveContainer>
        <LineChart
          width={500}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
            tickFormatter={tickFormatter}
          />
          <YAxis dataKey="value" />
          <Tooltip content={<GameweekTooltip playerName={playerName} />} />
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
  );
};

export default GameweekLineChart;
