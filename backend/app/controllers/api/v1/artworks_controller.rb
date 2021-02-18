class Api::V1::ArtworksController < ApplicationController

    def index
        artworks = Artwork.all
        render json: ArtworkSerializer.new(artworks)
    end

    def create
        # binding.pry
        artwork = Artwork.new(artwork_params)

        if artwork.save
            render json: ArtworkSerializer.new(artwork)
        else
            render json: { errors: artwork.errors.full_messages }
        end
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :image, :artist_id)
    end
end
