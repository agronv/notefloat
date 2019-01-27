json.extract! @user, :id, :username, :description
if @user.photo.attached?
  json.photoUrl url_for(@user.photo)
end