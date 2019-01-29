class ChangeCommentTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :parent_commnet_id
    add_column :comments, :parent_comment_id, :integer 
  end
end
