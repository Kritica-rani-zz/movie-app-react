import React from 'react';
import './index.css';

export default function LikedMovie(props) {
    const{Title, Poster, Type,Year,imdbID}= props.Data
  const favMovie= props.favMovie
  const handleRemove= props.handleRemove
  console.log("favmovie",favMovie)
  return (
    <div className='Movie-Body'>
        <div className='Movie-info'><img src={Poster} className='image' alt={Title} /> </div>
     <div className='Description'>   <h3>{Title}</h3>
         <p>{Type}</p> 
         <p>{Year}</p>
        
{favMovie?<button onClick={(e)=>handleRemove(imdbID)} className="unlike">Unlike</button>:<button className="like">Like</button>}
         </div>
        
      </div>

  )
}
