import PieChart from './Charts/PieChart';
import ManagerProfileCard from './Cards/ManagerProfileCard';
import HistoryCarousel from './HistoryCarousel/HistoryCarousel';
import BestSeasonCard from './Cards/BestSeasonCard';

interface ICompareSectionProps {
  id?: string;
  name?: string;
  seasonsPlayed?: number;
  totalRankMean?: string;
  src?: string;
  slides?: {
    total_points: string;
    rank: string;
    season_name: string;
  }[];
  bestRank?: string;
  region?: string;
}

const CompareSection: React.FC<ICompareSectionProps> = ({
  id,
  name,
  seasonsPlayed,
  totalRankMean,
  src,
  slides,
  bestRank = 'N/A',
  region,
}) => (
  <div className="mx-auto mb-6 w-full">
    <div className="mb-6">
      <ManagerProfileCard
        region={region}
        id={id}
        name={name}
        seasonsPlayed={seasonsPlayed}
        totalRankMean={totalRankMean}
        src={src}
      />
    </div>
    <div className="mb-6">{slides && <HistoryCarousel slides={slides} />}</div>
    <div className="grid min-w-full grid-cols-3">
      <div className="col-span-2">
        <BestSeasonCard></BestSeasonCard>
      </div>
      <div className="col-span-1 flex items-center justify-center overflow-hidden">
        <PieChart bestRank={bestRank}></PieChart>
      </div>
    </div>
  </div>
);

export default CompareSection;
