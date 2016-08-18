require 'data_mapper'
require 'dm-postgres-adapter'
require_relative 'models/notes'

DataMapper.setup(:default, "postgres://localhost/shreddr_development")
DataMapper.finalize
DataMapper.auto_upgrade!
