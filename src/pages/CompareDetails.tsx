import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useCheckId } from '../hooks/useCheckId';
import { RootState } from '../state/store';
import { useManagerHistoryData } from '../hooks/useManagerHistoryData';

const CompareDetails = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);

  const { pastSeasonsData } = useManagerHistoryData(fplId);
  useCheckId();
  console.log(pastSeasonsData);
  return (
    <>
      <Navbar />
    </>
  );
};
export default CompareDetails;
