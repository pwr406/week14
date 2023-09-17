//component to display all the different movies
import React from 'react'
import MovieCard from './MovieCard'
import movies from "../Movies"

export default function MovieContainer() {
    //created a variable to hold the results of maping through movie data.
    //movie card component creates props and uses results from movie file to populate based on mapping.
    const cards = movies.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                name={movie.name}
                poster={movie.poster}
                director={movie.director}
                rating={movie.rating}
                overview={movie.overview}
            />
        )
    })

    //Created a container and put the cards variable in there to display the movies. 
    return (
        <div className="container-fluid bg-secondary-subtle">
            <div className="row justify-content-start pt-3" id="movieRow">
                {cards}
            </div>
        </div>
    )
}