#list stories
get "/stories" do
  @stories = Story.all
  json_array = []
  @stories.each do |d|
    json_array << d.as_json
  end
  json json_array
end



#new story
get "/stories/new" do
  erb :"stories/new"
end



#create story
post "/stories" do
  @new_story = Story.create({title: params["title"], content: params["content"], user_id: params["user_id"] })
  json @new_story.as_json
end



#delete story
delete "/stories/:id" do
  @deleted_story = Story.delete(params["id"]) #if variable doesn't store info - store info with find method
end



#edit stories
get "/stories/:id/edit" do
  @edited_story = Story.find(params["id"])
  erb :"stories/edit"
end



#update stories
put "/stories/:id" do
  @updated_story = Story.find(params["id"])
  @new_password = BCrypt::Password.create(params["new_password"])
  @updated_story.update({email: params["email"], password: @new_password})

  redirect "/home"
end



#show story
get "/stories/:id" do
  @shown_story = Story.find(params["id"])
  json @shown_story.as_json
end