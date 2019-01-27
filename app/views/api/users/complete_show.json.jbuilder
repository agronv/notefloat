json.extract! @user, :id, :username, :description
if @user.photo.attached?
  json.photoUrl url_for(@user.photo)
end
json.tracks do 
  json.array! @user.tracks do |track|
    json.extract! track, :id, :title
    if track.photo.attached?
      json.trackPhoto url_for(track.photo)
    end
  end
end