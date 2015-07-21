class User < ActiveRecord::Base
  has_many :stories
  include BCrypt

end