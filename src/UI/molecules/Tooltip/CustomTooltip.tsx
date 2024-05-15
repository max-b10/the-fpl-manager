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
    return (
      <div className="rounded border border-primary bg-black p-3 ">
        <span>Gameweek: {label}</span>
        <br />
        {payload.map((ele, index) => (
          <>
            <span key={index} className="text-primary">
              {ele.name} : {ele.value}
            </span>
          </>
        ))}
      </div>
    );
  }
  return null;
};
