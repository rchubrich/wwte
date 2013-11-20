class ChangePhoneToBigint < ActiveRecord::Migration
  def self.up
    change_column :restaurants, :phone, :integer, :limit => 8
  end

  def self.down
    change_column :restaurants, :phone, :integer
  end
end
