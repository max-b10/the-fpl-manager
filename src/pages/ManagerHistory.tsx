import Navbar from '../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';
import { AlertCircle, LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
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
import TabHeader from '../components/Headers/TabHeader';

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    totalRankMean,
    totalPoints,
    isLoadingManagerData,
    isLoadingManagerHistory,
    playerName,
  } = useManagerData(fplId);
  const { pastSeasonsData, gameWeekHistoryData } = useManagerHistoryData(fplId);
  const { generalGameweekData } = useGeneralData();
  const handleSubmit = useNavigationWithId();

  useCheckId();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar handleSubmit={handleSubmit} />
        <FadeIn>
          {isLoadingManagerData || isLoadingManagerHistory ? (
            <div className="flex min-h-screen items-center justify-center">
              <LoaderIcon className="animate-spin" />
            </div>
          ) : (
            <Tabs defaultValue="current" className="w-full">
              <div>
                <TabsList className="ml-6 mt-3 bg-card p-2">
                  <TabsTrigger className="mr-2" value="current">
                    Current
                  </TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
              </div>
              <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
                <div className="w-full">
                  <TabsContent value="current">
                    <FadeIn>
                      <SimpleLineChart
                        playerName={playerName || ''}
                        totalPoints={totalPoints || ''}
                        playerGameweekData={gameWeekHistoryData || []}
                        generalGameweekData={generalGameweekData || []}
                      ></SimpleLineChart>
                    </FadeIn>
                  </TabsContent>
                  <TabsContent value="past">
                    <FadeIn>
                      <TabHeader
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
                    </FadeIn>
                  </TabsContent>
                </div>
              </main>
            </Tabs>
          )}
          <Footer />
        </FadeIn>
      </div>
    </>
  );
};
export default ManagerHistory;
