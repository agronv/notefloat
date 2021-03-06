Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :index, :show, :update, :destroy] do 
      resources :comments, only: [:create, :destroy]
    end
    get '/random_tracks', to: 'tracks#random'
    get '/complete_random_tracks', to: 'tracks#complete_random'
    get '/splash_tracks', to: 'tracks#splash_tracks'
    get '/users_complete_show/:id', to: 'users#complete_show'
    get '/tracks_complete_show/:id', to: 'tracks#complete_show'
  end
end
