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
  erb :"users/new"
end



#create user
post "/users" do
  @password = BCrypt::Password.create(params["password"])
  @new_user = User.create({email: params["email"], password: @password})
  json @new_user.json_format
end



#delete user
delete "/users/:id" do
  @deleted_user = User.delete(:id) #if variable doesn't store info - store info with find method
end



#edit users
get "/users/:id/edit" do
  @edited_user = User.find(:id)
end



#update users
put "/users/:id" do
  @updated_user = User.find(:id)
  @new_password = BCrypt::Password.create(params["new_password"])
  @updated_user.save({email: params["email"], password: @new_password})
end



#show user
get "/users/:id" do
  @user = User.find(:id)
  erb :"users/show"
end

