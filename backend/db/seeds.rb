require 'json'

puts 'Seeding...'

path = File.join(File.dirname(__FILE__), "/champion.json")
champions = JSON.parse(File.read(path))['champions']

SummonerProfile.destroy_all
Champion.destroy_all
SummonerProfileChampionJoiner.destroy_all

champs = []
champions.each do |champion|
  champs << {
    key: champion ['key'],
    name: champion['name'],
    title: champion['title'],
    blurb: champion['blurb'],
    info: champion['info'],
    roles: champion['roles'],
    partype: champion['partype'],
    stats: champion['stats'],
    icon_image: champion['icon_image'],
    skins: champion['skins'],
    lore: champion['lore'],
    allytips: champion['allytips'],
    enemytips: champion['enemytips'],
    spells: champion['spells'],
    passive: champion['passive']
  }
end

Champion.create(champs)


sp1 = SummonerProfile.create(name: 'noobSummoner')
sp2 = SummonerProfile.create(name: 'mediumSummoner')

SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.first.id)
SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: Champion.second.id)

SummonerProfileChampionJoiner.create(summoner_profile_id: sp2.id, champion_id: Champion.second.id)

puts 'Seeded!'