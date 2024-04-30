import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
import IdForm from '../components/IdForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import useSWR from 'swr';
import { ILeague, ILeagueData } from '../types/league/leagueData';
import { fetcher } from '../lib/fetcher';
import { API_ENDPOINTS } from '../../api/endpoints';
import { useState } from 'react';
import { LeaguesTable } from '../components/Table/ManagerCompare/LeaguesTable/LeaguesTable';
import { MembersTable } from '../components/Table/ManagerCompare/MembersTable/MembersTable';
import { leagueColumns } from '../components/Table/ManagerCompare/LeaguesTable/leagueColumns';
import { memberColumns } from '../components/Table/ManagerCompare/MembersTable/memberColumns';
import { useNavigationWithId } from '../hooks/useNavigationWithId';

const ManagerComparison = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    isLoadingManagerData,
    isLoadingManagerHistory,
    managerClassicLeagues,
  } = useManagerData(fplId);
  const handleSubmit = useNavigationWithId();
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);

  const { data: selectedLeague } = useSWR<ILeagueData>(
    selectedLeagueId
      ? `http://localhost:3005/${API_ENDPOINTS.league}/${selectedLeagueId}`
      : null,
    fetcher
  );
  useCheckId();
  const leagueMembers = selectedLeague?.standings.results;
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
              <h2 className="text-3xl font-bold tracking-tight ">
                Compare manager history
              </h2>
              <p className="text-s ml-0.5 text-muted-foreground">
                Pick a league and compare with players
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <IdForm onSubmit={handleSubmit} />
            </div>
          </div>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid items-stretch gap-4 md:gap-8 lg:grid-cols-3">
              <Card className="border-primary lg:col-span-2">
                <CardHeader className="px-7">
                  <CardTitle>Classic Leagues</CardTitle>
                  <CardDescription>Select a league</CardDescription>
                </CardHeader>
                <CardContent className="max-h-96 overflow-auto">
                  <LeaguesTable
                    columns={leagueColumns}
                    data={(managerClassicLeagues || []).map((league) => ({
                      league,
                    }))}
                    onRowClick={(data: { league: ILeague }) =>
                      setSelectedLeagueId(data.league.id)
                    }
                  />
                </CardContent>
              </Card>
              <Card className="border-primary lg:col-span-1">
                {selectedLeagueId ? (
                  <>
                    <CardHeader>
                      <CardTitle>{selectedLeague?.league.name}</CardTitle>
                      <CardDescription>
                        Select a player to compare
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="max-h-96 overflow-auto">
                      <MembersTable
                        columns={memberColumns}
                        data={(leagueMembers || []).map((member) => ({
                          member,
                        }))}
                      />
                    </CardContent>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center text-primary">
                    <p>Select a league to see its members</p>
                  </div>
                )}
              </Card>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default ManagerComparison;
