import Navbar from '../components/Navbar';

import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { LoaderIcon, Users } from 'lucide-react';
import { useCheckId } from '../hooks/useCheckId';
import { useManagerData } from '../hooks/useManagerData';
import IdForm from '../components/IdForm';
import { setId } from '../state/idSlice';
import { useDispatch } from 'react-redux';
import { IFormData } from '../types/FormData';
// import { ILeague } from '../types/league/leagueData';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../UI/organisms/Card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../UI/organisms/Table';
const ManagerComparison = () => {
  const dispatch = useDispatch();

  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    isLoadingManagerData,
    isLoadingManagerHistory,
    managerClassicLeagues,
  } = useManagerData(fplId);
  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
  };

  useCheckId();
  console.log(managerClassicLeagues);
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
              <p className="text-s text-muted-foreground">
                Who has the best FPL history?
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <IdForm onSubmit={handleSubmit} />
            </div>
          </div>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <Card className="border-primary">
              <CardHeader className="px-7">
                <CardTitle>Classic Leagues</CardTitle>
                <CardDescription>Select a league</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableHead>League</TableHead>
                    <TableHead className="hidden sm:table-cell">Name</TableHead>
                  </TableHeader>
                  <TableBody>
                    {managerClassicLeagues?.map((league) => (
                      <TableRow key={league.id}>
                        <TableCell className="sm:table-cell">
                          <Users className="h-8 w-8 text-primary" />
                        </TableCell>
                        <TableCell className="sm:table-cell">
                          {league.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div>
              Display league participants on a card here with their history
              details.
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default ManagerComparison;
