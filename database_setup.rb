unless ActiveRecord::Base.connection.table_exists?(:users)
  ActiveRecord::Base.connection.create_table :users do |t|
    t.text :email
    t.text :password
  end
end

unless ActiveRecord::Base.connection.table_exists?(:stories)
  ActiveRecord::Base.connection.create_table :stories do |t|
    t.integer :user_id
    t.text :title
    t.text :content
  end
end