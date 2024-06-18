import PieChart from './Charts/PieChart';
import ManagerProfileCard from './Cards/ManagerProfileCard';
import HistoryCarousel from './HistoryCarousel/HistoryCarousel';
import BestSeasonCard from './Cards/BestSeasonCard';
import { IPast } from '../types/manager/managerHistory';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../UI/molecules/Tooltip/Tooltip';

interface ICompareSectionProps {
  id?: string;
  name?: string;
  seasonsPlayed?: number;
  totalRankMean?: number;
  totalPointsMean?: number;
  src?: string;
  slides: IPast[];
  bestRank: number;
  region?: string;
  isLeftColumn: boolean;
  bestSeason: IPast;
  showUserIcon?: boolean;
}

const CompareSection: React.FC<ICompareSectionProps> = ({
  id,
  name,
  seasonsPlayed,
  totalRankMean,
  totalPointsMean,
  src,
  slides,
  bestRank,
  bestSeason,
  region,
  isLeftColumn,
  showUserIcon,
}) => {
  return (
    <div className="mx-auto mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <div className="mb-6">
        <ManagerProfileCard
          region={region}
          id={id || ''}
          name={name}
          seasonsPlayed={seasonsPlayed}
          totalRankMean={totalRankMean}
          totalPointsMean={totalPointsMean}
          src={src}
          showUserIcon={showUserIcon}
        />
      </div>
      <div className="mb-6">
        <HistoryCarousel slides={slides} />
      </div>
      <div className="grid min-w-full grid-cols-2 gap-4">
        {isLeftColumn ? (
          <>
            <div className="col-span-1">
              <BestSeasonCard bestSeason={bestSeason} bestRank={bestRank} />
            </div>
            <div className="col-span-1 flex items-center justify-center overflow-hidden">
              <Card className="flex flex-grow flex-col border border-primary">
                <CardHeader className="mb-2 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
                  <div className="flex w-full justify-between">
                    <CardTitle className="flex items-center text-lg">
                      Manager Rating
                    </CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-6 w-6 text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Calculated using average rank</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <PieChart totalRankMean={totalRankMean || 0}></PieChart>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-1 flex items-center justify-center overflow-hidden">
              <Card className="flex flex-grow flex-col border border-primary">
                <CardHeader className="mb-2 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
                  <div className="flex w-full justify-between">
                    <CardTitle className="flex items-center text-lg">
                      Manager Rating
                    </CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-6 w-6 text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Calculated using average rank</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <PieChart totalRankMean={totalRankMean || 0}></PieChart>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-1">
              <BestSeasonCard bestSeason={bestSeason} bestRank={bestRank} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompareSection;
