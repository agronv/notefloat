class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :image_url
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.index [:session_token], unique: true
      t.index [:username], unique: true
      t.timestamps
    end
  end
end
