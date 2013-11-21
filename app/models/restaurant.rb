class Restaurant < ActiveRecord::Base
  attr_accessible :description, :latitude, :locu_id, :longitude, :name, :phone, :url, :address, :opentableurl
end
