import React from 'react';

type GameweekTooltipProps = {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string;
  playerName: string;
};
export const GameweekTooltip: React.FC<GameweekTooltipProps> = ({
  active,
  payload,
  label,
  playerName,
}) => {
  if (active && payload?.length) {
    const managerData = payload.filter((item) => item.name === playerName);
    const averageData = payload.filter((item) => item.name !== playerName);
    const sortedPayload = [...managerData, ...averageData];
    return (
      <div className="rounded border border-primary bg-black p-3 ">
        <span>Gameweek {label}</span>
        <br />
        <div className="flex flex-col">
          {sortedPayload.map((ele, index) => (
            <span
              key={index}
              className={
                ele.name === playerName
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }
            >
              {ele.name} : {ele.value} pts
            </span>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
