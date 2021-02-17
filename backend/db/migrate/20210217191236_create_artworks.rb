class CreateArtworks < ActiveRecord::Migration[6.0]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
