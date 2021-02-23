class Api::V1::ArtistsController < ApplicationController

    def index
        artists = Artist.all
        render json: ArtistSerializer.new(artists)
    end

    def create
        # binding.pry
        artist = Artist.new(artist_params)
        if artist.save
            render json: ArtistSerializer.new(artist)
        else
            render json: { errors: artist.errors.full_messages }
        end
    end

    private

    def artist_params
        params.require(:artist).permit(:name)
    end
end
