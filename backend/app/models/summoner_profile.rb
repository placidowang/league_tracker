class SummonerProfile < ApplicationRecord
  has_many :summoner_profile_champion_joiners
  has_many :champions, through: :summoner_profile_champion_joiners
end
