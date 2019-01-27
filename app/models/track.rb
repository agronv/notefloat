class Track < ApplicationRecord
  GENRES = %w(pop techno classic_rock alternative_rock rap classical).freeze

  validates :user_id, :title, :genre, presence: true 
  validates :genre, inclusion: GENRES, unless: -> { genre.blank? }
  validate :ensure_mp3 

  has_one_attached :photo
  has_one_attached :mp3_file

  belongs_to :user


  def ensure_mp3 
    unless self.mp3_file.attached?
      errors[:mp3_file] << "mp3 file must exist"
    end
  end

end
