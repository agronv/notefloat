Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :edit]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :index, :show, :update, :destroy]
    get '/random_tracks', to: 'tracks#random'
    get '/complete_random_tracks', to: 'tracks#complete_random'
    get '/users_complete_show/:id', to: 'users#complete_show'
  end
end
