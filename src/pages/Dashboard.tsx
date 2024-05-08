import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  LoaderIcon,
  ShieldHalf,
  Tally5,
} from 'lucide-react';
import DashboardCard from '../components/Cards/DashboardCard';
import { useManagerData } from '../hooks/useManagerData';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { usePlayerData } from '../hooks/usePlayerData';
import { useCheckId } from '../hooks/useCheckId';
import { setId } from '../state/idSlice';
import { useDispatch } from 'react-redux';
import { IFormData } from '../types/FormData';
import { DashboardTable } from '../components/Table/Dashboard/DashboardTable';
import { columns } from '../components/Table/Dashboard/columns';
import Header from '../components/Header';

const Dashboard = () => {
  const dispatch = useDispatch();
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    playerName,
    regionName,
    managerData,
    isLoadingManagerData,
    isLoadingManagerHistory,
    rankDifference,
    teamName,
    previousGameweek,
    previousGameweekScore,
    currentGameweek,
    gameweekScore,
    gameweekRank,
    favouriteTeam,
    currentSquad,
  } = useManagerData(fplId);
  const { getPlayerData } = usePlayerData();

  const rankDifferenceElement =
    rankDifference > 0 ? (
      <div className="flex text-red">
        <ArrowDown className="mr-0.5 h-4 w-4" />
        {Math.abs(rankDifference).toLocaleString()}
        <p className="ml-1 text-xs text-muted-foreground">from last week</p>
      </div>
    ) : (
      <div className="mr-0.5 flex text-primary">
        <ArrowUp className="h-4 w-4 " />
        {Math.abs(rankDifference).toLocaleString()}
      </div>
    );
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
  };
  useCheckId();
  const playerInformation =
    currentSquad?.map((player) => {
      const playerData = getPlayerData(player.element);
      return {
        player: player,
        playerData: playerData,
      };
    }) || [];
  return (
    <>
      <Navbar />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <Header
            headerText={playerName}
            subText={regionName}
            handleSubmit={handleSubmit}
          />

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <DashboardCard
                title="Team"
                icon={<ShieldHalf className="h-4 w-4 text-primary" />}
                content={teamName}
                footer={favouriteTeam}
              />
              <DashboardCard
                title="Overall Rank"
                icon={<Activity className="h-4 w-4 text-primary" />}
                content={managerData?.summary_overall_rank?.toLocaleString()}
                footer={<>{rankDifferenceElement}</>}
              />
              <DashboardCard
                title={'Gameweek ' + previousGameweek}
                icon={<Tally5 className="h-4 w-4 text-primary" />}
                content={previousGameweekScore}
                footer={gameweekRank}
              />
              <DashboardCard
                title={'Gameweek ' + currentGameweek}
                icon={<Tally5 className="h-4 w-4 text-primary" />}
                content={gameweekScore}
              />
            </div>
            <div className="flex flex-grow flex-col overflow-auto">
              <Card className="flex-grow border-primary">
                <CardHeader className="px-7">
                  <CardTitle>Current Squad</CardTitle>
                </CardHeader>
                <CardContent className="h-[calc(100vh-30rem)] overflow-auto">
                  <DashboardTable
                    columns={columns}
                    data={playerInformation}
                  ></DashboardTable>
                </CardContent>
              </Card>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default Dashboard;
