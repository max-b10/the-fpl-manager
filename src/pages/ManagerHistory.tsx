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
import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';
import HistoryCarousel from '../components/HistoryCarousel/HistoryCarousel';
import SimpleLineChart from '../components/SimpleLineChart';
import { useGeneralData } from '../hooks/useGeneralData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../UI/organisms/Tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import HistoryCard from '../components/Cards/HistoryCard';

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
  const {
    pastSeasonsData,
    gameWeekHistoryData,
    bestRank,
    worstRank,
    seasonsPlayed,
    highestPoints,
    lowestPoints,
  } = useManagerHistoryData(fplId);
  const { generalGameweekData } = useGeneralData();
  const handleSubmit = useNavigationWithId();
  useCheckId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit} />
      <div className="min-h-screen flex-grow overflow-auto">
        {isLoadingManagerData || isLoadingManagerHistory ? (
          <div className="flex min-h-screen items-center justify-center">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          <FadeIn>
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="ml-6 mt-3 bg-card p-2">
                <TabsTrigger className="mr-2" value="current">
                  Current
                </TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
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
                      {pastSeasonsData && pastSeasonsData.length > 0 ? (
                        <div className="flex justify-center">
                          <Card className="flex-grow border-primary">
                            <CardHeader>
                              <div>
                                <CardTitle className="mb-1">
                                  Season History
                                </CardTitle>
                                <CardDescription>
                                  Check out your past seasons as an FPL manager
                                </CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid h-[440px] grid-cols-3 items-center">
                                <div className="col-span-1">
                                  <HistoryCard
                                    headerText={totalRankMean}
                                    subText={
                                      pastSeasonsData &&
                                      pastSeasonsData.length > 0
                                        ? 'Mean overall rank'
                                        : 'Current overall rank'
                                    }
                                    bestFinish={bestRank}
                                    worstFinish={worstRank}
                                    seasonsPlayed={seasonsPlayed}
                                    lowestPoints={lowestPoints}
                                    highestPoints={highestPoints}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <HistoryCarousel
                                    slides={pastSeasonsData || []}
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
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
          </FadeIn>
        )}
      </div>
      <Footer />
    </>
  );
};
export default ManagerHistory;
