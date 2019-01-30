@tracks.each do |track|
  json.set! track.id do 
    json.extract! track, :id, :title, :length, :user_id, :genre
    json.username track.user.username
    if track.photo.attached?
      json.photoUrl url_for(track.photo)
    end
  end 
end