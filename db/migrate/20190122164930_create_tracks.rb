class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false 
      t.integer :length
      t.timestamps
    end
  end
end
