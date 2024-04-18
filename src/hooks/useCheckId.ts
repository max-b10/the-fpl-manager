import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../state/store';

export const useCheckId = () => {
  const navigate = useNavigate();
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);

  useEffect(() => {
    if (fplId === 0) {
      navigate('/');
    }
  }, [fplId, navigate]);
};
