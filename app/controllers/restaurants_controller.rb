class RestaurantsController < ApplicationController
require 'json'
require 'open-uri'

  def splash
    render 'splash'
  end

  def index
    @restaurants = Restaurant.all
  end

end
