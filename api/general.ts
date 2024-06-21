import axios from 'axios';
import { VercelRequest, VercelResponse } from '@vercel/node';

export const general = async (_: VercelRequest, res: VercelResponse) => {
  try {
    const response = await axios.get(
      'https://fantasy.premierleague.com/api/bootstrap-static/'
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
