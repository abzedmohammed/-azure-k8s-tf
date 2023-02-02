class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster, :description, :runtime, :rating, :rated, :starring, :genre
end
