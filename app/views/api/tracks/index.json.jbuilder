@tracks.each do |track|
  json.set! track.id do 
    json.extract! track, :id, :title, :length, :user_id 
    json.photoUrl url_for(track.photo)
    json.mp3 url_for(track.mp3_file)
  end 
end