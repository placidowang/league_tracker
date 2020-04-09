require 'json'

path = File.join(File.dirname(__FILE__), "/champion.json")
champions = JSON.parse(File.read(path))['champions']

SummonerProfile.destroy_all
Champion.destroy_all
SummonerProfileChampionJoiner.destroy_all

champions.each do |champion|
  Champion.create(name: champion['name'], title: champion['title'], stats: champion['stats'], spells: champion['spells'])
end

sp1 = SummonerProfile.create(name: 'noobSummoner')
sp2 = SummonerProfile.create(name: 'mediumSummoner')

SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.first.id)
SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.second.id)

SummonerProfileChampionJoiner.create(summoner_profile_id: sp2.id, champion_id: Champion.second.id)

puts 'Seeded!'