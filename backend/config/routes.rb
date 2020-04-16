Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :champions, only: [:index, :show]
  resources :summoner_profiles, only: [:index]
  post '/user_login', to: "users#login"
  post '/user_signup', to: "users#signup"
  # get '/search_summoner', to: "summoner_profiles#search_summoner"
  post '/search_summoner', to: "summoner_profiles#search_summoner"
  get '/show_matches', to: "summoner_profiles#show_matches"
end
