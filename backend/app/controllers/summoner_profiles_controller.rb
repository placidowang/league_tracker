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

        render json: summoner_match
    end

end
