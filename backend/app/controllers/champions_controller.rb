class ChampionsController < ApplicationController
  skip_before_action :logged_in?
  before_action :set_champion

  def index
    champions = Champion.all
    render json: champions
  end

  def show
    # champion = Champion.find(params[:id])
    # render json: champion
  end

  private
  
  def set_champion
    # champion = Champion.find(params[:id])
  end
end
