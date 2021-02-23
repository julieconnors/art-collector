class Artwork < ApplicationRecord
  belongs_to :artist
  validates :title, presence: true
  validates :image, presence: true

end
