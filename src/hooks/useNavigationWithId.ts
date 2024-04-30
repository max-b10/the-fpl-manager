import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setId } from '../state/idSlice';
import { IFormData } from '../types/FormData';

export const useNavigationWithId = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: IFormData) => {
    dispatch(setId(data.id));
    navigate('/dashboard');
  };

  return handleSubmit;
};
