import Navbar from '../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { LoaderIcon } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
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
import Header from '../components/Headers/Header';
import FadeIn from '../components/Animations/FadeIn';
import Footer from '../components/Footer';
import MainContainer from '../components/Layout/MainContainer';

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
      <Navbar handleSubmit={handleSubmit} />
      {isLoadingManagerData || isLoadingManagerHistory ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <FadeIn>
            <Header
              headerText="Compare manager history"
              subText="Pick a league and compare with players"
            />

            <MainContainer>
              <div className="grid h-full items-stretch gap-4 md:gap-8 lg:grid-cols-3">
                <Card className="flex min-h-[70vh] flex-grow flex-col border-primary lg:col-span-2">
                  <CardHeader className="mb-4 rounded-tl-lg rounded-tr-lg bg-muted/50 px-7">
                    <CardTitle>Classic Leagues</CardTitle>
                    <CardDescription>Select a league</CardDescription>
                  </CardHeader>
                  <CardContent className="max-h-[50vh] overflow-auto">
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
                <Card className="min-h-[70vh]flex-grow flex flex-col border-primary lg:col-span-1">
                  {selectedLeagueId ? (
                    <>
                      <CardHeader className="mb-4 rounded-tl-lg rounded-tr-lg bg-muted/50 ">
                        <CardTitle>{selectedLeague?.league.name}</CardTitle>
                        <CardDescription>
                          Select a manager to compare
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="max-h-[50vh] overflow-auto">
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
            </MainContainer>
          </FadeIn>
        </>
      )}
      <Footer />
    </>
  );
};

export default ManagerComparison;
