import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../UI/organisms/Card';

interface IBestSeasonProps {
  bestRank?: string;
}

const BestSeasonCard: React.FC<IBestSeasonProps> = () => {
  return (
    <Card className="flex flex-grow flex-col border border-primary">
      <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
        <div>
          <CardTitle className="flex items-center text-lg">
            Best Season
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <div className="flex min-w-full justify-between">
          <div className="flex flex-grow">
            <ul className="grid w-full gap-4">
              <li className="flex w-full items-center justify-between">
                <span className="mr-4 text-muted-foreground">Season</span>
                <span>2021</span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span className="mr-4 text-muted-foreground">Points</span>
                <span>2,456</span>
              </li>
              <li className="flex w-full items-center justify-between">
                <span className="mr-4 text-muted-foreground">Rank</span>
                <span>127,988</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestSeasonCard;
