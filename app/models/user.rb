# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  description     :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates_presence_of :username, :password_digest, :session_token
  validates :session_token, :username, uniqueness: true
  validates :password, length: {minimum: 4, allow_nil: true}
  after_initialize :ensure_session
  validate :ensure_no_space
  validate :ensure_no_user
  attr_reader :password

  has_many :tracks
  has_many :comments
  has_one_attached :photo

  has_many :track_photos,
  through: :tracks,
  source: :photo_attachment

  def ensure_no_space 
    if self.username.split(" ").length != 1
      errors[:username] << "Username cannot contain a space"
    end
    if self.username.length > 16 
      errors[:username] << "Username cannot be longer than 16 characters"
    end
  end

  def ensure_no_user 
    User.all.select(:username)
  end
  
  def ensure_session 
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token! 
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end

  def password=(password) 
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username)

    if user 
      if BCrypt::Password.new(user.password_digest).is_password?(password)
        return user 
      else 
        return "Wrong password try again"
      end
    end
    return "Username does not exist"
  end

end
