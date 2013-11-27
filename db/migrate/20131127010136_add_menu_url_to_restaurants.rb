class AddMenuUrlToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :menu_url, :string
  end
end
