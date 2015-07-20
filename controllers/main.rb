#list users
get "/users" do
  @user_array = User.all
  erb :"users"
end


#new user
get "/users/new" do

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