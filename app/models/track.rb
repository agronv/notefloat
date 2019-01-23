class Track < ApplicationRecord
  validates :user_id, :title, presence: true 
  validate :ensure_mp3 
  validate :ensure_photo 

  has_one_attached :photo
  has_one_attached :mp3_file

  belongs_to :user


  def ensure_mp3 
    unless self.mp3_file.attached?
      errors[:mp3_file] << "mp3 file must exist"
    end
  end

  def ensure_photo 
    unless self.photo.attached?
      errors[:photo] << "photo must exist"
    end
  end

end
