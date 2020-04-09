# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SummonerProfile.destroy_all
Champion.destroy_all
SummonerProfileChampionJoiner.destroy_all

# loop through champions.json and Champion.Create each champ
c1 = Champion.create(name: 'Bozo', title: 'the Clown')
c2 = Champion.create(name: 'Carla', title: 'the Huntress')

sp1 = SummonerProfile.create(name: 'noobSummoner')
sp2 = SummonerProfile.create(name: 'mediumSummoner')

SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: c1.id)
SummonerProfileChampionJoiner.create(summoner_profile_id: sp1.id, champion_id: c2.id)

SummonerProfileChampionJoiner.create(summoner_profile_id: sp2.id, champion_id: c1.id)
