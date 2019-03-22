# == Schema Information
#
# Table name: tracks
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  length     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre      :string           not null
#

class Track < ApplicationRecord
  GENRES = %w(pop techno classic_rock alternative_rock rap classical).freeze

  validates :title, :genre, presence: true 
  validates :genre, inclusion: GENRES
  validate :ensure_mp3 

  has_one_attached :photo
  has_one_attached :mp3_file

  belongs_to :user
  has_many :comments

  has_many :comment_user,
  through: :comments,
  source: :user

  has_many :parent_comments,
  through: :comments,
  source: :parent_comment

  has_many :parent_comments_user,
  through: :comments,
  source: :parent_comment_user

  has_many :parent_comments_user_photo,
  through: :parent_comments_user,
  source: :photo_attachment

  has_many :comment_user_photos,
  through: :comment_user,
  source: :photo_attachment

  def ensure_mp3 
    unless self.mp3_file.attached?
      errors[:mp3_file] << "mp3 file must exist"
    end
  end

end
