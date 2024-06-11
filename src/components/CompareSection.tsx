import PieChart from './Charts/PieChart';
import ManagerProfileCard from './Cards/ManagerProfileCard';
import HistoryCarousel from './HistoryCarousel/HistoryCarousel';
import BestSeasonCard from './Cards/BestSeasonCard';
import { IPast } from '../types/manager/managerHistory';

interface ICompareSectionProps {
  id?: string;
  name?: string;
  seasonsPlayed?: number;
  totalRankMean?: number;
  src?: string;
  slides: IPast[];
  bestRank: number;
  region?: string;
  isLeftColumn: boolean;
  bestSeason: IPast;
}

const CompareSection: React.FC<ICompareSectionProps> = ({
  id,
  name,
  seasonsPlayed,
  totalRankMean,
  src,
  slides,
  bestRank,
  bestSeason,
  region,
  isLeftColumn,
}) => (
  <div className="mx-auto mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
    <div className="mb-6">
      <ManagerProfileCard
        region={region}
        id={id}
        name={name}
        seasonsPlayed={seasonsPlayed}
        totalRankMean={totalRankMean}
        src={src}
        isLeftColumn={isLeftColumn}
      />
    </div>
    <div className="mb-6">{slides && <HistoryCarousel slides={slides} />}</div>
    <div className="grid min-w-full grid-cols-3">
      {isLeftColumn ? (
        <>
          <div className="col-span-2">
            <BestSeasonCard
              bestSeason={bestSeason}
              isLeftColumn={isLeftColumn}
            />
          </div>
          <div className="col-span-1 flex items-center justify-center overflow-hidden">
            <PieChart bestRank={bestRank}></PieChart>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-1 flex items-center justify-center overflow-hidden">
            <PieChart bestRank={bestRank}></PieChart>
          </div>
          <div className="col-span-2">
            <BestSeasonCard
              bestSeason={bestSeason}
              isLeftColumn={isLeftColumn}
            />
          </div>
        </>
      )}
    </div>
  </div>
);

export default CompareSection;
