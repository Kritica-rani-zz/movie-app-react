import React, { useState } from 'react'
import './Css files/moviesearch.css'
export default function MovieSearch(props) {
  const { Title, Poster, Type, Year } = props.DataTrans
  const handleLike = props.handleLike
 
  const [like, islike] = useState(false)
  const handleFavourite = () => {
    handleLike(props.DataTrans)
    islike(!like)
  }
  return (
    <>

      <div className='Movie-Body'>
        <div className='Movie-info'><img src={Poster!=='N/A'?Poster:"https://media.comicbook.com/files/img/default-movie.png"} className='image' alt={Title} /> </div>
        <div className='Description'>   <h1>{Title}</h1>
          <p> Genere:{Type}</p>
          <p>Release Date:{Year}</p>



          {!like ? <button onClick={handleFavourite} className='Btn-like' >Like</button> :
            <button onClick={(e) => handleLike(props.DataTrans, islike)}className='Btn-like'>unLike</button>}
        </div>
      </div>

    </>
  )
}
