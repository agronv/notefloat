class Track < ApplicationRecord
  validates :user_id, :title, presence: true 

  has_one_attached :photo
  has_one_attached :mp3_file

  belongs_to :user
end
