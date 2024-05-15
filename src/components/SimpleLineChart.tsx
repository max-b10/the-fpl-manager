import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { FC } from 'react';
import { ICurrent } from '../types/manager/managerHistory';
import { CustomTooltip } from '../UI/molecules/Tooltip/CustomTooltip';
import { IEvent } from '../types/general/event';

type SimpleLineChartProps = {
  playerGameweekData: ICurrent[];
  generalGameweekData: IEvent[];
};

const SimpleLineChart: FC<SimpleLineChartProps> = ({
  playerGameweekData,
  generalGameweekData,
}) => {
  const series = [
    {
      name: 'Manager',
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
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Points</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 text-xl">2,500</div>
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
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {series.map((s) => (
                  <Line
                    dataKey="value"
                    data={s.data}
                    name={s.name}
                    key={s.name}
                    stroke={s.name === 'Manager' ? '#22C55E' : 'blue'}
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

export default SimpleLineChart;
