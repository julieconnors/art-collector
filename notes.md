Artist :name
has_many :artworks

Artwork :title :image
belongs_to :artist


rails g model Artist name
rails g model Artwork title image artist:references

* add validations to models

rails g controller api/v1/artists
rails g controller api/v1/artworks