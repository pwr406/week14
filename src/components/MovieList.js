import React from 'react'
import MovieCard from './MovieCard'
import movies from "../Movies"

export default function MovieContainer() {
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
    

    return (
        <div className="container-fluid bg-secondary-subtle">
            <div className="row justify-content-start pt-3" id ="movieRow">          
            {cards}
        </div>
    </div>
    )
}