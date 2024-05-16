import Navbar from '../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import { AlertCircle, LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
import Header from '../components/Header';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../UI/molecules/Alert/Alert';
import FadeIn from '../components/FadeIn';
import Footer from '../components/Footer';
import HistoryCarousel from '../components/HistoryCarousel/HistoryCarousel';
import SimpleLineChart from '../components/SimpleLineChart';
import { useGeneralData } from '../hooks/useGeneralData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../UI/organisms/Tabs';

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    totalRankMean,
    totalPoints,
    isLoadingManagerData,
    isLoadingManagerHistory,
  } = useManagerData(fplId);
  const { pastSeasonsData, gameWeekHistoryData } = useManagerHistoryData(fplId);
  const { generalGameweekData } = useGeneralData();
  const handleSubmit = useNavigationWithId();

  useCheckId();
  // const oneSeason = [
  //   {
  //     rank: '1',
  //     season_name: '1',
  //     total_points: '1',
  //   },
  // ];
  // const twoSeasons = [
  //   {
  //     rank: '1',
  //     season_name: '1',
  //     total_points: '1',
  //   },
  //   {
  //     rank: '2',
  //     season_name: '2',
  //     total_points: '3',
  //   },
  // ];
  return (
    <FadeIn>
      <>
        <div className="flex min-h-screen flex-col">
          <Navbar handleSubmit={handleSubmit} />
          {isLoadingManagerData || isLoadingManagerHistory ? (
            <div className="flex min-h-screen items-center justify-center">
              <LoaderIcon className="animate-spin" />
            </div>
          ) : (
            <Tabs defaultValue="account" className="w-full">
              <div>
                <TabsList className="m-2 bg-card p-2">
                  <TabsTrigger className="mr-2" value="account">
                    Current
                  </TabsTrigger>
                  <TabsTrigger value="password">Past</TabsTrigger>
                </TabsList>
              </div>
              <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
                <div className="w-full">
                  <TabsContent value="account">
                    <Header
                      headerText={totalRankMean}
                      subText={
                        pastSeasonsData && pastSeasonsData.length > 0
                          ? 'Mean overall rank'
                          : 'Current overall rank'
                      }
                    />
                    <SimpleLineChart
                      title={totalPoints?.toString() || '0'}
                      playerGameweekData={gameWeekHistoryData || []}
                      generalGameweekData={generalGameweekData || []}
                    ></SimpleLineChart>
                  </TabsContent>
                  <TabsContent value="password">
                    <Header
                      headerText={totalRankMean}
                      subText={
                        pastSeasonsData && pastSeasonsData.length > 0
                          ? 'Mean overall rank'
                          : 'Current overall rank'
                      }
                    />
                    {pastSeasonsData && pastSeasonsData.length > 0 ? (
                      <div className="flex  justify-center">
                        <HistoryCarousel slides={pastSeasonsData || []} />
                      </div>
                    ) : (
                      <div className="flex justify-center  text-primary">
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Oops!</AlertTitle>
                          <AlertDescription>
                            No past seasons data for this FPL manager, must be
                            rookie!
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}
                  </TabsContent>
                </div>
              </main>
            </Tabs>
          )}
          <Footer />
        </div>
      </>
    </FadeIn>
  );
};
export default ManagerHistory;
