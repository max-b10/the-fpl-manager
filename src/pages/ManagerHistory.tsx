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
import GameweekLineChart from '../components/Charts/GameweekLineChart';
import SeasonBarChart from '../components/Charts/SeasonBarChart';
import MainContainer from '../components/Layout/MainContainer';

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
      <div className="min-h-screen flex-grow overflow-auto px-4">
        {isLoadingManagerData || isLoadingManagerHistory ? (
          <div className="flex min-h-screen items-center justify-center">
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          <FadeIn>
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="mt-3 bg-card p-2 md:ml-7">
                <TabsTrigger className="mr-2" value="current">
                  Current
                </TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>
              <MainContainer>
                <div className="mt-2 w-full sm:mt-0">
                  <TabsContent value="current">
                    <FadeIn>
                      <Card className="flex-grow border-primary">
                        <CardHeader className="mb-4 flex rounded-tl-lg rounded-tr-lg bg-muted/50 px-7">
                          <div>
                            <CardTitle className="mb-1">
                              Gameweek History
                            </CardTitle>
                            <CardDescription>
                              How often do you beat the average?
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="h-[calc(100vh-20rem)] overflow-auto">
                          <GameweekLineChart
                            playerName={playerName || ''}
                            totalPoints={totalPoints || 0}
                            playerGameweekData={gameWeekHistoryData || []}
                            generalGameweekData={generalGameweekData || []}
                          ></GameweekLineChart>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  </TabsContent>
                  <TabsContent value="past">
                    <FadeIn>
                      {pastSeasonsData && pastSeasonsData.length > 0 ? (
                        <div className="grid h-full gap-4 md:grid-cols-3 md:gap-8">
                          <div className="flex h-full flex-grow flex-col gap-4 border-primary md:col-span-2">
                            <Card className="h-full border-primary">
                              <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50">
                                <div className="grid gap-0.5">
                                  <CardTitle className="group flex items-center gap-2 text-lg">
                                    Rank History
                                  </CardTitle>
                                </div>
                              </CardHeader>
                              <CardContent className="h-[calc(100vh-20rem)] overflow-auto">
                                <SeasonBarChart
                                  pastSeasonsData={pastSeasonsData || []}
                                />
                              </CardContent>
                            </Card>
                          </div>
                          <div className="flex h-full flex-grow flex-col gap-4 border-primary md:col-span-1">
                            <HistoryCard
                              rankMean={totalRankMean || 0}
                              subText={
                                pastSeasonsData && pastSeasonsData.length > 0
                                  ? 'Mean rank'
                                  : 'Current rank'
                              }
                              bestRank={bestRank || 0}
                              worstRank={worstRank || 0}
                              seasonsPlayed={seasonsPlayed || 0}
                              lowestPoints={lowestPoints}
                              highestPoints={highestPoints}
                              pointsMean={totalPointsMean || 0}
                              bestSeasonName={bestSeasonName}
                              worstSeasonName={worstSeasonName}
                            />
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
              </MainContainer>
            </Tabs>
          </FadeIn>
        )}
      </div>
      <Footer />
    </>
  );
};
export default ManagerHistory;
