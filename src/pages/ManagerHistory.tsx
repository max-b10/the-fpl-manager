import Navbar from '../components/Navbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../UI/organisms/Carousel';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import CarouselCard from '../components/Cards/CarouselCard';
import { AlertCircle, History, LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Header';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../UI/molecules/Alert/Alert';

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { totalRankMean, isLoadingManagerData, isLoadingManagerHistory } =
    useManagerData(fplId);
  const { pastSeasonsData } = useManagerHistoryData(fplId);
  const handleSubmit = useNavigationWithId();

  useCheckId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit} />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <Header
            headerText={totalRankMean}
            subText={
              pastSeasonsData && pastSeasonsData.length > 0
                ? 'Mean overall rank'
                : 'Current overall rank'
            }
          />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {pastSeasonsData && pastSeasonsData.length > 0 ? (
              <div className="flex justify-center">
                <Carousel
                  opts={{
                    align: 'start',
                  }}
                  className="w-64 max-w-sm"
                >
                  <CarouselContent>
                    {pastSeasonsData.map((season, index) => (
                      <CarouselItem key={index}>
                        <div className="p-2">
                          <CarouselCard
                            title={'Season: ' + season.season_name}
                            icon={<History className="h-4 w-4 text-primary" />}
                            content={season.total_points}
                            footer={season.rank}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ) : (
              <div className="flex justify-center  text-primary">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Oops!</AlertTitle>
                  <AlertDescription>
                    No past seasons data for this FPL manager, must be rookie!
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </main>
        </>
      )}
    </>
  );
};
export default ManagerHistory;
