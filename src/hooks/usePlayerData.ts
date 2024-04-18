import { useGeneralData } from './useGeneralData';
import { IPlayer } from '../types/general/player';
import teamMapping from '../constants/teamMapping';

export const usePlayerData = () => {
  const { generalData } = useGeneralData();

  const getPlayerName = (element: number) => {
    const player = generalData?.elements.find(
      (el: IPlayer) => el.id === element
    );
    return player ? `${player.first_name} ${player.second_name}` : 'Unknown';
  };

  const getPlayerClub = (element: number) => {
    const player = generalData?.elements.find(
      (el: IPlayer) => el.id === element
    );
    if (player) {
      const team = teamMapping.find((team) => team.id === player.team);
      return team ? team.name : 'Unknown';
    }
    return 'Unknown';
  };

  const getPlayerPrice = (element: number) => {
    const player = generalData?.elements.find(
      (el: IPlayer) => el.id === element
    );
    return player ? `${player.now_cost / 10.0}` : '0.00';
  };

  const getPlayerTotalPoints = (element: number) => {
    const player = generalData?.elements.find(
      (el: IPlayer) => el.id === element
    );
    return player ? `${player.total_points}` : '0.00';
  };
  const getPlayerImage = (element: number) => {
    const player = generalData?.elements.find(
      (el: IPlayer) => el.id === element
    );
    return player
      ? `https://resources.premierleague.com/premierleague/photos/players/250x250/p${player.photo}`.replace(
          '.jpg',
          '.png'
        )
      : '0.00';
  };

  return {
    getPlayerName,
    getPlayerClub,
    getPlayerPrice,
    getPlayerTotalPoints,
    getPlayerImage,
  };
};
