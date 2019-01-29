class Comment < ApplicationRecord
  validates_presence_of :body

  belongs_to :user 
  belongs_to :track 

  belongs_to :parent_comment,
  foreign_key: :parent_comment_id,
  class_name: :Comment

  has_many :children,
  foreign_key: :parent_comment_id,
  class_name: :Comment

end