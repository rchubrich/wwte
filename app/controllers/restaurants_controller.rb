class RestaurantsController < ApplicationController
require 'json'
require 'open-uri'

  def index
    @restaurants = Restaurant.all
  end
end
