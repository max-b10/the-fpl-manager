import React from 'react';

type SeasonTooltipProps = {
  season?: string;
  rank?: string;
  total_points?: string;
};

export const SeasonTooltip: React.FC<SeasonTooltipProps> = ({
  season,
  rank,
  total_points,
}) => {
  return (
    <div className="rounded border border-primary bg-black p-3 ">
      <div className="flex">
        <span className="mr-1 text-muted-foreground">Season: </span>
        <span>{season}</span>
      </div>
      <div className="flex">
        <span className="mr-1 text-muted-foreground">Rank: </span>
        <span>{rank}</span>
      </div>
      <div className="flex">
        <span className="mr-1 text-muted-foreground">Total pts: </span>
        <span>{total_points}</span>
      </div>
    </div>
  );
};
