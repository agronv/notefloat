json.extract! @track, :id, :user_id, :title, :length, :genre
json.username @track.user.username
if @track.photo.attached?
  json.photoUrl url_for(@track.photo)
end
json.mp3 url_for(@track.mp3_file)