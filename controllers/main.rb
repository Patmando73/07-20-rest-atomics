#home page
get "/home" do
  erb :"main/home"
end


#list users
get "/users" do
  @users = User.all
  json_array = []
  @users.each do |d|
    json_array << d.json_format
  end
  json json_array
end



#new user
get "/users/new" do
  @password = BCrypt::Password.create(params["password"])
  @new_user = User.create({email: params["email"], password: @password})
  json @new_user.json_format
end



#create user
post "/users" do

end



#delete user
delete "/users/:id" do

end



#edit users
get "/users/:id/edit" do

end



#update users
put "/users/:id" do

end



#show users
get "/users/:id" do

end

