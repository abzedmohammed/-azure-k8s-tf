class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster
      t.text :description
      t.time :runtime
      t.integer :rating
      t.string :rated
      t.string :starring
      t.string :genre

      t.timestamps
    end
  end
end
