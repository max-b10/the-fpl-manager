import useSWR from 'swr';
import { IGeneralData } from '../types/general/generalData';
import Navbar from '../components/Navbar/Navbar';
import { API_ENDPOINTS } from '../../server/endpoints';
import { fetcher } from '../lib/fetcher';
import { useNavigationWithId } from '../hooks/useNavigationWithId';

const Player = () => {
  const { data: generalData } = useSWR<IGeneralData>(
    `http://localhost:3005/${API_ENDPOINTS.general}`,
    fetcher
  );

  const erlingHaaland = generalData?.elements.find(
    (player) => player.first_name === 'Erling'
  );
  const handleSubmit = useNavigationWithId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit} />

      <div>
        <h1 className="text-red-700">Dashboard</h1>
      </div>
      <div className="flex flex-col text-red-700">
        {erlingHaaland && (
          <>
            <span>First Name: {erlingHaaland.first_name}</span>
            <span>Last Name: {erlingHaaland.second_name}</span>
            <span>ID: {erlingHaaland.id}</span>
            <span>
              Chance of Playing Next Round:{' '}
              {erlingHaaland.chance_of_playing_next_round}
            </span>
            <span>
              Chance of Playing This Round:{' '}
              {erlingHaaland.chance_of_playing_this_round}
            </span>
            <span>Code: {erlingHaaland.code}</span>
            <span>Cost Change Event: {erlingHaaland.cost_change_event}</span>
            <span>
              Cost Change Event Fall: {erlingHaaland.cost_change_event_fall}
            </span>
            <span>Cost Change Start: {erlingHaaland.cost_change_start}</span>
            <span>
              Cost Change Start Fall: {erlingHaaland.cost_change_start_fall}
            </span>
            <span>Dreamteam Count: {erlingHaaland.dreamteam_count}</span>
            <span>Element Type: {erlingHaaland.element_type}</span>
            <span>EP Next: {erlingHaaland.ep_next}</span>
            <span>EP This: {erlingHaaland.ep_this}</span>
            <span>Event Points: {erlingHaaland.event_points}</span>
            <span>Form: {erlingHaaland.form}</span>
            <span>In Dreamteam: {erlingHaaland.in_dreamteam.toString()}</span>
            <span>News: {erlingHaaland.news}</span>
            <span>News Added: {erlingHaaland.news_added}</span>
            <span>Now Cost: {erlingHaaland.now_cost}</span>
            <span>Photo: {erlingHaaland.photo}</span>
            <span>Points Per Game: {erlingHaaland.points_per_game}</span>
            <span>
              Selected By Percent: {erlingHaaland.selected_by_percent}
            </span>
            <span>Special: {erlingHaaland.special.toString()}</span>
            <span>Squad Number: {erlingHaaland.squad_number}</span>
            <span>Status: {erlingHaaland.status}</span>
            <span>Team: {erlingHaaland.team}</span>
            <span>Team Code: {erlingHaaland.team_code}</span>
            <span>Total Points: {erlingHaaland.total_points}</span>
            <span>Transfers In: {erlingHaaland.transfers_in}</span>
            <span>Transfers In Event: {erlingHaaland.transfers_in_event}</span>
            <span>Transfers Out: {erlingHaaland.transfers_out}</span>
            <span>
              Transfers Out Event: {erlingHaaland.transfers_out_event}
            </span>
            <span>Value Form: {erlingHaaland.value_form}</span>
            <span>Value Season: {erlingHaaland.value_season}</span>
            <span>Web Name: {erlingHaaland.web_name}</span>
            <span>Minutes: {erlingHaaland.minutes}</span>
            <span>Goals Scored: {erlingHaaland.goals_scored}</span>
            <span>Assists: {erlingHaaland.assists}</span>
            <span>Clean Sheets: {erlingHaaland.clean_sheets}</span>
            <span>Goals Conceded: {erlingHaaland.goals_conceded}</span>
            <span>Own Goals: {erlingHaaland.own_goals}</span>
            <span>Penalties Saved: {erlingHaaland.penalties_saved}</span>
            <span>Penalties Missed: {erlingHaaland.penalties_missed}</span>
            <span>Yellow Cards: {erlingHaaland.yellow_cards}</span>
            <span>Red Cards: {erlingHaaland.red_cards}</span>
            <span>Saves: {erlingHaaland.saves}</span>
            <span>Bonus: {erlingHaaland.bonus}</span>
            <span>BPS: {erlingHaaland.bps}</span>
            <span>Influence: {erlingHaaland.influence}</span>
            <span>Creativity: {erlingHaaland.creativity}</span>
            <span>Threat: {erlingHaaland.threat}</span>
            <span>ICT Index: {erlingHaaland.ict_index}</span>
            <span>Starts: {erlingHaaland.starts}</span>
            <span>Expected Goals: {erlingHaaland.expected_goals}</span>
            <span>Expected Assists: {erlingHaaland.expected_assists}</span>
            <span>
              Expected Goal Involvements:{' '}
              {erlingHaaland.expected_goal_involvements}
            </span>
            <span>
              Expected Goals Conceded: {erlingHaaland.expected_goals_conceded}
            </span>
            <span>Influence Rank: {erlingHaaland.influence_rank}</span>
            <span>
              Influence Rank Type: {erlingHaaland.influence_rank_type}
            </span>
            <span>Creativity Rank: {erlingHaaland.creativity_rank}</span>
            <span>
              Creativity Rank Type: {erlingHaaland.creativity_rank_type}
            </span>
            <span>Threat Rank: {erlingHaaland.threat_rank}</span>
            <span>Threat Rank Type: {erlingHaaland.threat_rank_type}</span>
            <span>ICT Index Rank: {erlingHaaland.ict_index_rank}</span>
            <span>
              ICT Index Rank Type: {erlingHaaland.ict_index_rank_type}
            </span>
            <span>
              Corners and Indirect Freekicks Order:{' '}
              {erlingHaaland.corners_and_indirect_freekicks_order}
            </span>
            <span>
              Corners and Indirect Freekicks Text:{' '}
              {erlingHaaland.corners_and_indirect_freekicks_text}
            </span>
            <span>
              Direct Freekicks Order: {erlingHaaland.direct_freekicks_order}
            </span>
            <span>
              Direct Freekicks Text: {erlingHaaland.direct_freekicks_text}
            </span>
            <span>Penalties Order: {erlingHaaland.penalties_order}</span>
            <span>Penalties Text: {erlingHaaland.penalties_text}</span>
            <span>
              Expected Goals Per 90: {erlingHaaland.expected_goals_per_90}
            </span>
            <span>Saves Per 90: {erlingHaaland.saves_per_90}</span>
            <span>
              Expected Assists Per 90: {erlingHaaland.expected_assists_per_90}
            </span>
            <span>
              Expected Goal Involvements Per 90:{' '}
              {erlingHaaland.expected_goal_involvements_per_90}
            </span>
            <span>
              Expected Goals Conceded Per 90:{' '}
              {erlingHaaland.expected_goals_conceded_per_90}
            </span>
            <span>
              Goals Conceded Per 90: {erlingHaaland.goals_conceded_per_90}
            </span>
            <span>Now Cost Rank: {erlingHaaland.now_cost_rank}</span>
            <span>Now Cost Rank Type: {erlingHaaland.now_cost_rank_type}</span>
            <span>Form Rank: {erlingHaaland.form_rank}</span>
            <span>Form Rank Type: {erlingHaaland.form_rank_type}</span>
            <span>
              Points Per Game Rank: {erlingHaaland.points_per_game_rank}
            </span>
            <span>
              Points Per Game Rank Type:{' '}
              {erlingHaaland.points_per_game_rank_type}
            </span>
            <span>Selected Rank: {erlingHaaland.selected_rank}</span>
            <span>Selected Rank Type: {erlingHaaland.selected_rank_type}</span>
            <span>Starts Per 90: {erlingHaaland.starts_per_90}</span>
            <span>
              Clean Sheets Per 90: {erlingHaaland.clean_sheets_per_90}
            </span>
          </>
        )}
      </div>
    </>
  );
};
export default Player;
