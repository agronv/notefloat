class AddValidation < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :genre, :string, null: false
  end
end
