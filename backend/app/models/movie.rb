class Movie < ApplicationRecord

    def format_starring
        starring.gsub(/"|\[|\]/, '')
    end
end
