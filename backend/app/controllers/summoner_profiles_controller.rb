class SummonerProfilesController < ApplicationController

    # before_action :logged_in?, only: [:search_summoner]

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

        url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bexzz?api_key=RGAPI-9e67cfe9-579d-40fe-b050-2214431835af"
        response = HTTParty.get(url)
        summoner = response.parsed_response
        render json: summoner
    end

end
