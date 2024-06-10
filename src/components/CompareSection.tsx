import PieChart from './Charts/PieChart';
import HistoryCarousel from './HistoryCarousel/HistoryCarousel';
import ManagerProfile from './ManagerProfile';

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
  <div className="mx-auto w-full">
    <div>
      <ManagerProfile
        region={region}
        id={id}
        name={name}
        seasonsPlayed={seasonsPlayed}
        totalRankMean={totalRankMean}
        src={src}
      />
    </div>
    <div>{slides && <HistoryCarousel slides={slides} />}</div>
    <div className="flex max-w-xs justify-start">
      <PieChart bestRank={bestRank}></PieChart>
    </div>
  </div>
);

export default CompareSection;
