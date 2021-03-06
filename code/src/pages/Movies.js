import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movies.css'


export const Movies = () => {
  const api_key = 'a73940630fef7bbf6627fbbc1d85c9ee'
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState('popular')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [category])

  return (
      <section className='movie-list'>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
            <div className='text'>
              <h2>{movie.original_title}</h2>
              <h3>Released {movie.release_date}</h3>
            </div>
          </Link>
        ))
        }
      </section>
   
  )
}