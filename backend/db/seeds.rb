# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Artwork.destroy_all

Artist.create(name: "Claude Monet")
Artist.create(name: "Vincent Van Gogh")

Artwork.create(title: "Impression Sunrise", image: "https://www.claude-monet.com/images/paintings/impression-sunrise.jpg", artist_id: 1)
Artwork.create(title: "Garden at Saint Adresse", image: "https://www.claude-monet.com/images/paintings/garden-at-sainte-adresse.jpg", artist_id: 1)
Artwork.create(title: "Sunflowers", image:"https://www.vangoghgallery.com/skin/img/sunflower_full.jpg", artist_id: 2)
Artwork.create(title: "Starry Night", image:"https://www.vangoghgallery.com/img/starry_night_full.jpg", artist_id: 2)