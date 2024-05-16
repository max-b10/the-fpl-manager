import React from 'react';

type TooltipProps = {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string;
};
export const CustomTooltip: React.FC<TooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload?.length) {
    const managerData = payload.filter((item) => item.name === 'Manager');
    const averageData = payload.filter((item) => item.name !== 'Manager');
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
                ele.name === 'Manager'
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }
            >
              {ele.name} : {ele.value}pts
            </span>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
