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
import { useGeneralData } from '../hooks/useGeneralData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../UI/organisms/Tabs';
import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from '../UI/organisms/Card';
import HistoryCard from '../components/Cards/HistoryCard';
import GameweekLineChart from '../components/Charts/GameweekLineChart';
import SeasonBarChart from '../components/Charts/SeasonBarChart';

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    totalRankMean,
    totalPoints,
    totalPointsMean,
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
    bestSeasonName,
    worstSeasonName,
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
              <main className="flex min-h-screen flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="w-full">
                  <TabsContent value="current">
                    <FadeIn>
                      <GameweekLineChart
                        playerName={playerName || ''}
                        totalPoints={totalPoints || ''}
                        playerGameweekData={gameWeekHistoryData || []}
                        generalGameweekData={generalGameweekData || []}
                      ></GameweekLineChart>
                    </FadeIn>
                  </TabsContent>
                  <TabsContent value="past">
                    <FadeIn>
                      {pastSeasonsData && pastSeasonsData.length > 0 ? (
                        <div className="grid h-full items-stretch gap-4 md:grid-cols-3 md:gap-8">
                          <Card className="flex max-h-[70vh] flex-grow flex-col border-primary p-0 md:col-span-1">
                            <HistoryCard
                              rankMean={totalRankMean}
                              subText={
                                pastSeasonsData && pastSeasonsData.length > 0
                                  ? 'Mean rank'
                                  : 'Current rank'
                              }
                              bestFinish={bestRank}
                              worstFinish={worstRank}
                              seasonsPlayed={seasonsPlayed}
                              lowestPoints={lowestPoints}
                              highestPoints={highestPoints}
                              pointsMean={totalPointsMean}
                              bestSeasonName={bestSeasonName}
                              worstSeasonName={worstSeasonName}
                            />
                          </Card>
                          <div className="flex max-h-[70vh] flex-grow flex-col gap-4 border-primary md:col-span-2 md:grid md:grid-rows-5">
                            <Card className="border-primary md:row-span-2">
                              <CardContent>
                                <HistoryCarousel
                                  slides={pastSeasonsData || []}
                                />
                              </CardContent>
                            </Card>
                            <Card className="border-primary md:row-span-3">
                              <CardContent>
                                <SeasonBarChart
                                  pastSeasonsData={pastSeasonsData || []}
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-center text-primary">
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
