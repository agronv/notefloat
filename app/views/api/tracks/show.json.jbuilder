
json.track do 
  json.extract! @track, :id, :user_id, :title, :length, :genre, :comment_ids
  json.username @track.user.username
  if @track.photo.attached?
    json.photoUrl url_for(@track.photo)
  end
end 

json.users do 
  json.set! @track.user_id do
    json.extract! @track.user, :id, :username
    if @track.user.photo.attached?
      json.photoUrl url_for(@track.user.photo)
    end
  end 
  @track.comments.each do |comment| 
    json.set comment.user_id do 
      json.extract! @track.user, :id, :username
      if @track.user.photo.attached?
        json.photoUrl url_for(@track.user.photo)
      end
    end
  end
end

json.comments do 
  @track.comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :track_id, :user_id, :body
      if comment.parent_comment_id 
        json.parent_comment_id comment.parent_comment_id
      end
    end
  end
end