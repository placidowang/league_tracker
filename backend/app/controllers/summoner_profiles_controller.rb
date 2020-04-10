class SummonerProfilesController < ApplicationController

    def index
        render json: {message: "you in"}
    end

end
