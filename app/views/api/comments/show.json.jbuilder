json.extract! @comment, :id, :track_id, :user_id, :body
if @comment.parent_comment_id 
  json.parent_comment_id @comment.parent_comment_id
  json.parentUserName @comment.parent_comment.user.username
  json.parentUserId @comment.parent_comment.user_id
end
if @comment.user.photo.attached?
  json.photoUrl url_for(@comment.user.photo)
end
json.username @comment.user.username