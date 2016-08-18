require 'sinatra/base'
require_relative 'data_mapper_setup'
require 'json'

class Server < Sinatra::Base
  get '/notes' do
    Note.all.to_json
  end

  post '/' do
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
