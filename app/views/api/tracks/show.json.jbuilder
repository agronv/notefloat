
json.track do 
  json.extract! @track, :id, :user_id, :title, :length, :genre
  json.username @track.user.username
  if @track.photo.attached?
    json.photoUrl url_for(@track.photo)
  end
end 

json.user do 
  json.extract! @track.user , :id, :username
  if @track.user.photo.attached?
    json.photoUrl url_for(@track.user.photo)
  end
end