json.extract! @track, :id, :user_id, :title, :length
json.photoUrl url_for(track.photo)
json.fileUrl url_for(track.mp3_file)