class Champion < ApplicationRecord
  has_many :summoner_profile_champion_joiners
  has_many :summoner_profiles, through: :summoner_profile_champion_joiners
end
