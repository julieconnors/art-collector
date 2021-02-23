class ArtworkSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image, :artist_id, :artist
end
