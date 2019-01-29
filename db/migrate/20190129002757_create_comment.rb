class CreateComment < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false, index: true
      t.integer :track_id, null: false, index: true
      t.integer :parent_commnet_id
      t.text :body, null: false 
    end
  end
end
