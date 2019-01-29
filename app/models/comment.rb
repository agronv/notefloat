# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  track_id          :integer          not null
#  body              :text             not null
#  parent_comment_id :integer
#

class Comment < ApplicationRecord
  validates_presence_of :body

  belongs_to :user 
  belongs_to :track 

  belongs_to :parent_comment,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  optional: true

  has_many :children,
  foreign_key: :parent_comment_id,
  class_name: :Comment

end
