class RestaurantsController < ApplicationController
require 'json'
require 'open-uri'

  def index
    @restaurants = Restaurant.all
  end

  def show
    render params[:id]
  end
end
