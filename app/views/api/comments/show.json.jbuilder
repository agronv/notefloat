json.extract! @comment, :id, :track_id, :user_id, :body
if @comment.parent_comment_id 
  json.parent_comment_id @comment.parent_comment_id
end