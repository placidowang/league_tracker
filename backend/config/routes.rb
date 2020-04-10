Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :champions, only: [:index, :show]
  post '/user_login', to: "users#login"
  post '/user_signup', to: "users#signup"
end
