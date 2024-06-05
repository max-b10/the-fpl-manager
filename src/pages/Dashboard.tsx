import Navbar from '../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  LoaderIcon,
  ShieldHalf,
  Tally4,
  User,
} from 'lucide-react';
import DashboardCard from '../components/Cards/DashboardCard';
import { useManagerData } from '../hooks/useManagerData';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import { usePlayerData } from '../hooks/usePlayerData';
import { useCheckId } from '../hooks/useCheckId';
import { DashboardTable } from '../components/Table/Dashboard/DashboardTable';
import { columns } from '../components/Table/Dashboard/columns';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';

const Dashboard = () => {
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
    previousGameWeek,
    previousGameWeekScore,
    favouriteTeam,
    currentSquad,
  } = useManagerData(fplId);
  const { getPlayerData, isLoadingPlayerData } = usePlayerData();

  const rankDifferenceElement =
    rankDifference > 0 ? (
      <div className="flex text-red">
        <ArrowDown className="mr-0.5 h-4 w-4" />
        {Math.abs(rankDifference).toLocaleString()}
        {/* <p className="ml-1 text-xs text-muted-foreground">from last week</p> */}
      </div>
    ) : (
      <div className="mr-0.5 flex text-primary">
        <ArrowUp className="h-4 w-4 " />
        {Math.abs(rankDifference).toLocaleString()}
      </div>
    );
  const handleSubmit = useNavigationWithId();

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
      <Navbar handleSubmit={handleSubmit} />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div
          className="flex min-h-screen items-center justify-center"
          data-cy="loader"
        >
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <FadeIn>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <DashboardCard
                  data-cy="dashboard-card-current-gameweek"
                  title="Manager"
                  icon={<User className="h-4 w-4 text-primary" />}
                  content={playerName}
                  footer={regionName}
                />
                <DashboardCard
                  data-cy="dashboard-card-team"
                  title="Team"
                  icon={<ShieldHalf className="h-4 w-4 text-primary" />}
                  content={teamName}
                  footer={favouriteTeam}
                />
                <DashboardCard
                  data-cy="dashboard-card-overall-rank"
                  title="Overall Rank"
                  icon={<Activity className="h-4 w-4 text-primary" />}
                  content={managerData?.summary_overall_rank?.toLocaleString()}
                  footer={<>{rankDifferenceElement}</>}
                />
                <DashboardCard
                  data-cy="dashboard-card-previous-gameweek"
                  title={'Gameweek ' + previousGameWeek?.event}
                  icon={<Tally4 className="h-4 w-4 text-primary" />}
                  content={previousGameWeekScore}
                  footer={`${previousGameWeek?.rank.toLocaleString()} rank`}
                />
              </div>
              <div className="flex flex-grow flex-col overflow-auto">
                <Card className="flex-grow border-primary">
                  <CardHeader className="px-7">
                    <CardTitle data-cy="table-title">Current Squad</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[calc(100vh-23rem)] overflow-auto">
                    {isLoadingPlayerData ? (
                      <div
                        className="flex min-h-screen items-center justify-center"
                        data-cy="loader"
                      >
                        <LoaderIcon className="animate-spin" />
                      </div>
                    ) : (
                      <DashboardTable
                        columns={columns}
                        data={playerInformation}
                      ></DashboardTable>
                    )}
                  </CardContent>
                </Card>
              </div>
            </main>
          </FadeIn>
        </>
      )}
      <Footer />
    </>
  );
};
export default Dashboard;
