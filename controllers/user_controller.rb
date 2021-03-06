#list users
get "/users" do
  @users = User.all
  json_array = []
  @users.each do |d|
    json_array << d.as_json
  end
  json json_array
end



#new user
get "/users/new" do
  erb :"users/new"
end



#create user
post "/users" do
  @password = BCrypt::Password.create(params["password"])
  @new_user = User.create({email: params["email"], password: @password})

  json @new_user.as_json
end



#delete user
delete "/users/:id" do
  @deleted_user = User.delete(params["id"]) #if variable doesn't store info - store info with find method
end



#edit users
get "/users/:id/edit" do
  @edited_user = User.find(params["id"])
  erb :"users/edit"
end



#update users
put "/users/:id" do
  @updated_user = User.find(params["id"])
  @new_password = BCrypt::Password.create(params["new_password"])
  @updated_user.update({email: params["email"], password: @new_password})

  redirect "/home"
end



#show user
get "/users/:id" do
  @shown_user = User.find(params["id"])
  json @shown_user.as_json
end