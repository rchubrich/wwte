class RestaurantsController < ApplicationController
require 'json'
require 'open-uri'

  def index
    @restaurants = Restaurant.all
  end

  def show
    phone = Restaurant.find(params[:id]).phone
    url = "http://api.yelp.com/phone_search?phone=#{phone}&ywsid=#{ENV["YELP_API_KEY"]}"
    @yelp = JSON.load(open(url).read)
    render params[:id]
  end
end
