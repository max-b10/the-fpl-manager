import Navbar from '../components/Navbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../UI/organisms/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import CarouselCard from '../components/CarouselCard';
import {
  History,
  LoaderIcon,
  // , Tally5
} from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
// import DashboardCard from '../components/DashboardCard';
import { useManagerData } from '../hooks/useManagerData';
import { IFormData } from '../types/FormData';
import { setId } from '../state/idSlice';
import IdForm from '../components/IdForm';

const ManagerHistory = () => {
  const dispatch = useDispatch();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    // totalPointsMean,
    totalRankMean,
    isLoadingManagerData,
    isLoadingManagerHistory,
  } = useManagerData(fplId);
  const { pastSeasonsData } = useManagerHistoryData(fplId);
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    // navigate('/dashboard');
  };
  useCheckId();

  return (
    <>
      <Navbar />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-between px-6 py-6 sm:flex-row sm:px-6 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight ">
                {totalRankMean}
              </h1>
              <p className="text-s text-muted-foreground">Mean overall rank</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <IdForm onSubmit={handleSubmit} />
            </div>
          </div>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {/* <DashboardCard
              title={'Pts and Rank History'}
              icon={<Tally5 className="h-4 w-4 text-muted-foreground" />}
              content={totalPointsMean}
              footer={totalRankMean}
            /> */}
            <div className="flex justify-center">
              <Carousel
                opts={{
                  align: 'start',
                }}
                className="w-64 max-w-sm"
              >
                <CarouselContent>
                  {pastSeasonsData?.map((season, index) => (
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
          </main>
        </>
      )}
    </>
  );
};
export default ManagerHistory;
