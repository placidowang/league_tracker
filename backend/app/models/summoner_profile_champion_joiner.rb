class SummonerProfileChampionJoiner < ApplicationRecord
  belongs_to :summoner_profile
  belongs_to :champion
end
