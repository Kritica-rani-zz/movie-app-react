import React, { useEffect, useState } from 'react'
import MovieSearch from './MovieSearch'
import Navbar from './Navbar'
import LikedMovie from './LikedMovie'
import './moviedata.css'
export default function MovieData() {
  const [MovieData, setMovieData] = useState([])
  const [like, setlike] = useState([])
  const [favMovie, isfavMovie] = useState(false)

  async function Movie(s) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=891a9115&s=${s}`)
    const responseData = await response.json();

    setMovieData(responseData.Search)
  }

  useEffect(() => {

    Movie('dhoom')
  }, [])

  const handleSearch = (e, input) => {
    e.preventDefault()
    console.log("input", input)
    Movie(input);
  }
  const handleLike = (Movie, favMovie) => {

    let list = [...like, Movie]
    setlike(list)

  }

  const handleFav = (e) => {

    isfavMovie(true)
  }
  const handleMovie = (e) => {
    isfavMovie(false)
  }
  const handleRemove = (imdbID) => {
    console.log("imdbid", imdbID)
    const LikedData = like.filter((item) => item.imdbID !== imdbID)
    setlike(LikedData)

  }
  
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <div>  <button onClick={(e) => handleMovie(e)} className="Btn-Tab">Movie</button>
        <button onClick={(e) => handleFav(e)} className="Btn-Tab">Fav</button></div>


      {favMovie ? like && like.map((item) => {
        return (
          <LikedMovie Data={item}
            favMovie={favMovie} handleRemove={handleRemove} />
        )
      })
        : MovieData && MovieData.map((item) => {

          return (
            <div>
              <MovieSearch DataTrans={item}
                handleLike={handleLike} handleMovie={handleMovie}
              />
            </div>
          )
        })}

    </div>
  )
}