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
import DashboardCard from '../components/DashboardCard';
import { useManagerData } from '../hooks/useManagerData';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/organisms/Card';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from '../UI/organisms/Table';
import { usePlayerData } from '../hooks/usePlayerData';
import { useCheckId } from '../hooks/useCheckId';
import IdForm from '../components/IdForm';
import { setId } from '../state/idSlice';
import { useDispatch } from 'react-redux';
import { IFormData } from '../types/FormData';

import TableRowModal from '../components/TableRowModal';
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
  const { getPlayerName, getPlayerClub, getPlayerPrice, getPlayerTotalPoints } =
    usePlayerData();

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
                {playerName}
              </h1>
              <p className="text-s text-muted-foreground">{regionName}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <IdForm onSubmit={handleSubmit} />
            </div>
          </div>

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
            <Card className="border-primary">
              <CardHeader className="px-7">
                <CardTitle>Current Squad</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableHead>Player</TableHead>
                    <TableHead className="hidden sm:table-cell">Name</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Price
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Ownership (%)
                    </TableHead>
                    <TableHead>Total Points</TableHead>
                  </TableHeader>
                  <TableBody>
                    {currentSquad?.map((player) => (
                      <TableRowModal
                        key={player.element}
                        player={player}
                        getPlayerName={getPlayerName}
                        getPlayerClub={getPlayerClub}
                        getPlayerPrice={getPlayerPrice}
                        getPlayerTotalPoints={getPlayerTotalPoints}
                      />
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </>
      )}
    </>
  );
};
export default Dashboard;
