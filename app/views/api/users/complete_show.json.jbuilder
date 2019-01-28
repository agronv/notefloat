
json.user do 
  json.extract! @user, :id, :username, :description, :track_ids
  if @user.photo.attached?
    json.photoUrl url_for(@user.photo)
  end
end

json.tracks do 
  @user.tracks.each do |track|
    json.set! track.id do 
      json.extract! track, :id, :title, :user_id, :genre
      if track.photo.attached?
        json.photoUrl url_for(track.photo)
      end
    end
  end
end 