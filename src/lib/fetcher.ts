import axios from 'axios';

export const fetcher = (url: string) =>
  axios(url)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.data;
    })
    .catch((err) => {
      console.log('Error while fetching data:', err);
      return null;
    });
