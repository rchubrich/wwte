class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :locu_id
      t.decimal :latitude
      t.decimal :longitude
      t.integer :phone
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
