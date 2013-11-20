class AddOpenTableUrlToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :opentableurl, :string
  end
end
