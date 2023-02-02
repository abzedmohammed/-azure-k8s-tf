class VoteSerializer < ActiveModel::Serializer
  attributes :id, :upvote, :downvote
  has_one :user
  has_one :movie
end
