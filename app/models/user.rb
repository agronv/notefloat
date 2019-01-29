# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string
#  description     :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates_presence_of :username, :password_digest, :session_token
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 4, allow_nil: true}
  after_initialize :ensure_session
  attr_reader :password

  has_many :tracks
  has_many :comments
  has_one_attached :photo
  
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

    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    return nil
  end

end
