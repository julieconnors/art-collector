class Api::V1::ArtistsController < ApplicationController

    def index
        artists = Artist.all
        render json: ArtistSerializer.new(artists)
    end
end
