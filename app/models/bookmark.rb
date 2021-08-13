class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  has_one_attached :photo
  validates_uniqueness_of :movie, scope: :list

  validates :comment, length: { minimum: 6 }
end
