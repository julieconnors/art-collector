Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :artworks, only: [:index, :create, :show, :destroy]
      resources :artists, only: [:index]
    end
  end
end
