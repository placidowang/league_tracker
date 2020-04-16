class SummonerProfilesController < ApplicationController

    skip_before_action :logged_in?, only: [:search_summoner]

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
        @APIKEY = "RGAPI-9663a2e8-f8d4-4a35-8511-aae1dd2b4961"
        # get summoner info
        summoner_url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/#{@summonerName}?api_key=#{@APIKEY}"
        response = HTTParty.get(summoner_url)
        summoner = response.parsed_response

        # get summoner's champions
        summoner_champions_url = "https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/#{summoner["id"]}?api_key=#{@APIKEY}"
        champions_response = HTTParty.get(summoner_champions_url)
        summoner_champions = champions_response.parsed_response

        # get summoner's ranks 
        rank_url = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/#{summoner["id"]}?api_key=#{@APIKEY}"
        rank_response = HTTParty.get(rank_url)
        summoner_rank = rank_response.parsed_response

        # get summoner's matches 
        # match_url = "https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/#{summoner["accountId"]}?api_key=#{@APIKEY}"
        # match_response = HTTParty.get(match_url)
        # summoner_match = match_response.parsed_response
        # matchArr = []
        # summoner_match["matches"].take(20).each do |match|
        #     single_match_url = "https://na1.api.riotgames.com/lol/match/v4/matches/#{match["gameId"]}?api_key=#{@APIKEY}"
        #     single_match_response = HTTParty.get(single_match_url)
        #     summoner_single_match = single_match_response.parsed_response
        #     matchArr << filterMatch(summoner_single_match,summoner["id"])
        # end

        # render json: filterData(summoner,summoner_rank,matchArr,summoner_champions)
        render json: filterData(summoner,summoner_rank,summoner_champions)
    end

    def filterData(summoner,rank,champions)
        data = {}
        data["name"] = summoner["name"]
        data["summonerLevel"] = summoner["summonerLevel"]
        data["profileImage"] = "http://ddragon.leagueoflegends.com/cdn/10.8.1/img/profileicon/#{summoner["profileIconId"]}.png"
        data["summoerId"] = summoner["id"]
        data["accountId"] = summoner["accountId"]

        rank_obj = rank.find{|r| r["queueType"] == "RANKED_SOLO_5x5"}

        data["rankType"] = rank_obj["queueType"]
        data["tier"] = rank_obj["tier"]
        data["rankLevel"] = rank_obj["rank"]
        data["wins"] = rank_obj["wins"]
        data["losses"] = rank_obj["losses"] 

        # data["matches"] = matches
        data["champions"] = []

        champions.each do |champion| 
            champion_obj = {}
            champion_obj["championId"] = champion["championId"]
            champion_obj["championLevel"] = champion["championLevel"]
            champion_obj["championPoints"] = champion["championPoints"]
            data["champions"] << champion_obj
        end

        data 
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
        
        match_obj = {}
        
        match_obj["gameType"] = match["gameType"]
        match_obj["gameMode"] = match["gameMode"]
        match_obj["championId"] = participants["championId"]
        match_obj["spell1Id"] = spells["#{participants["spell1Id"]}"]
        match_obj["spell2Id"] = spells["#{participants["spell2Id"]}"]
        match_obj["win"] = participants["stats"]["win"]
        match_obj["item0"] = "#{item_image}#{participants["stats"]["item0"]}.png"
        match_obj["item1"] = "#{item_image}#{participants["stats"]["item1"]}.png"
        match_obj["item2"] = "#{item_image}#{participants["stats"]["item2"]}.png"
        match_obj["item3"] = "#{item_image}#{participants["stats"]["item3"]}.png"
        match_obj["item4"] = "#{item_image}#{participants["stats"]["item4"]}.png"
        match_obj["item5"] = "#{item_image}#{participants["stats"]["item5"]}.png"
        match_obj["item6"] = "#{item_image}#{participants["stats"]["item6"]}.png"
        match_obj["kills"] = participants["stats"]["kills"]
        match_obj["deaths"] = participants["stats"]["deaths"]
        match_obj["assists"] = participants["stats"]["assists"]
        match_obj["goldEarned"] = participants["stats"]["goldEarned"]
        match_obj["champLevel"] = participants["stats"]["champLevel"]

        match_obj
    end

end
