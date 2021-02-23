class Api::V1::ArtworksController < ApplicationController

    def index
        artworks = Artwork.all
        render json: ArtworkSerializer.new(artworks)
    end

    def create
        if params[:artist_name]
            binding.pry

            # artist = Artist.create(artist_name)
        end
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: ArtworkSerializer.new(artwork)
        else
            render json: { errors: artwork.errors.full_messages }
        end
    end

    def show
        artwork = Artwork.find(params[:id])

        render json: ArtworkSerializer.new(artwork)        
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy

        render json: ArtworkSerializer.new(artwork)
    end

    private

    def artwork_params
        params.require(:artwork).permit(:title, :image, :artist_id)
    end
end
