class SummonerProfilesController < ApplicationController

    # skip_before_action :logged_in?, only: [:search_summoner]

    def index
        render json: {message: "you're logged in"}
    end

    def search_summoner
        puts "Hello"
        # url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/PureAlchemy?api_key=RGAPI-0dc4405e-38d9-4bf3-8b9a-17f82620ec5d"
        # response = HTTParty.get(url)
        # summoner = response.parsed_response
        # # byebug
        # render json: response
        @summonerName = params[:summonerName]
        summoner_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+@summonerName+'?api_key=RGAPI-9e67cfe9-579d-40fe-b050-2214431835af'
        response = HTTParty.get(summoner_url)
        summoner = response.parsed_response

        rank_url = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner["id"] + '?api_key=RGAPI-9e67cfe9-579d-40fe-b050-2214431835af'
        rank_response = HTTParty.get(rank_url)
        summoner_rank = rank_response.parsed_response

        match_url = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/'+summoner["accountId"]+'?api_key=RGAPI-9e67cfe9-579d-40fe-b050-2214431835af'
        match_response = HTTParty.get(match_url)
        summoner_match = match_response.parsed_response
        matchArr = []
        summoner_match["matches"].take(10).each do |match|
            single_match_url = "https://na1.api.riotgames.com/lol/match/v4/matches/#{match["gameId"]}?api_key=RGAPI-9e67cfe9-579d-40fe-b050-2214431835af"
            single_match_response = HTTParty.get(single_match_url)
            summoner_single_match = single_match_response.parsed_response
            matchArr << filterMatch(summoner_single_match,summoner["id"])
        end

        render json: matchArr
    end

    def filterMatch(match,summonerId)

        spells = {
            "21"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerBarrier.png", 
            "1"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerBoost.png", 
            "35"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerDarkStarChampSelect1.png", "36"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerDarkStarChampSelect2.png", "14"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerDot.png", 
            "3"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerExhaust.png", 
            "4"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerFlash.png", 
            "6"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerHaste.png", 
            "7"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerHeal.png", 
            "13"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerMana.png", 
            "30"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerPoroRecall.png", 
            "31"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerPoroThrow.png", 
            "33"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerSiegeChampSelect1.png", 
            "34"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerSiegeChampSelect2.png", 
            "11"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerSmite.png", 
            "39"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerSnowURFSnowball_Mark.png", "32"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerSnowball.png", 
            "12"=>"http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerTeleport.png"
        }   

        item_image = "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/item/"

        participartId = match["participantIdentities"].find{|player| player["player"]["summonerId"] == summonerId}["participantId"]

        participants = match["participants"].find{|participant| participant["participantId"] == participartId}
        
        matchHash = {}
        
        matchHash["gameType"] = match["gameType"]
        matchHash["gameMode"] = match["gameMode"]
        matchHash["championId"] = participants["championId"]
        matchHash["spell1Id"] = spells["#{participants["spell1Id"]}"]
        matchHash["spell2Id"] = spells["#{participants["spell2Id"]}"]
        matchHash["win"] = participants["stats"]["win"]
        matchHash["item0"] = "#{item_image}#{participants["stats"]["item0"]}.png"
        matchHash["item1"] = "#{item_image}#{participants["stats"]["item1"]}.png"
        matchHash["item2"] = "#{item_image}#{participants["stats"]["item2"]}.png"
        matchHash["item3"] = "#{item_image}#{participants["stats"]["item3"]}.png"
        matchHash["item4"] = "#{item_image}#{participants["stats"]["item4"]}.png"
        matchHash["item5"] = "#{item_image}#{participants["stats"]["item5"]}.png"
        matchHash["item6"] = "#{item_image}#{participants["stats"]["item6"]}.png"
        matchHash["kills"] = participants["stats"]["kills"]
        matchHash["deaths"] = participants["stats"]["deaths"]
        matchHash["assists"] = participants["stats"]["assists"]
        matchHash["goldEarned"] = participants["stats"]["goldEarned"]
        matchHash["champLevel"] = participants["stats"]["champLevel"]

        matchHash
    end

end
