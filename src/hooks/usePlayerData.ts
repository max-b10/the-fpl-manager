import { useGeneralData } from './useGeneralData';
import { IPlayer } from '../types/general/player';
import teamMapping from '../constants/teamMapping';

export const usePlayerData = () => {
  const { generalData } = useGeneralData();

  const getPlayer = (element: number) => {
    return generalData?.elements.find((el: IPlayer) => el.id === element);
  };

  const getPlayerName = (element: number) => {
    const player = getPlayer(element);
    return player ? `${player.first_name} ${player.second_name}` : 'Unknown';
  };

  const getPlayerClub = (element: number) => {
    const player = getPlayer(element);
    if (player) {
      const team = teamMapping.find((team) => team.id === player.team);
      return team ? team.name : 'Unknown';
    }
    return 'Unknown';
  };

  const getPlayerPrice = (element: number) => {
    const player = getPlayer(element);
    return player ? `${player.now_cost / 10.0}` : '0.00';
  };

  const getPlayerOwnership = (element: number) => {
    const player = getPlayer(element);
    return player ? `${player.selected_by_percent}` : '0.00';
  };

  const getPlayerTotalPoints = (element: number) => {
    const player = getPlayer(element);
    return player ? `${player.total_points}` : '0.00';
  };

  const getPlayerImage = (element: number) => {
    const player = getPlayer(element);
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
    getPlayerOwnership,
    getPlayerTotalPoints,
    getPlayerImage,
  };
};
