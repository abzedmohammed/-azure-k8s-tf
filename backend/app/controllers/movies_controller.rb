class MoviesController < ApplicationController

    def format_starring
        format_starring
    end

    def index
        render json: Movie.all, status: :ok
    end

    def create
        movie = Movie.create!(movie_params)
        if movie.valid?
            render json:movie, status: :created
        else
            render json: {error: "Opps! Somethings went wrong. Did you forget to fill out a field!"}, status: :unprocessable_entity
        end
    end

    def show
        movie = Movie.find(params[:id])
        if movie
            render json: movie, status: :found
        else
            render json: {error: "Movie not found"}, status: :not_found
        end
    end

    def update
        movie = Movie.find(params[:id])
        if movie
            movie.update(movie_params)
            render json: movie, status: :accepted
        else
            render json: {error: "Something has gone wrong"}, status: :unprocessable_entity
        end
    end

    def destroy
        movie = Movie.find(params[:id])
        if movie
            movie.destroy
            render json: {success: "Deleted"}, status: :ok
        else
            render json: {error: "Movie not found"}, status: :not_found
        end
    end

    private

    def movie_params
        params.permit(:title, :description, :poster, :runtime, :rating, :rated, :starring, :genre, :release_date)
    end
end
