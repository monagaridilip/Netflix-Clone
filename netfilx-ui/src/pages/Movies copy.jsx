import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';


// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import NotAvaliable from '../components/NotAvaliable';
import SelectGenre from '../components/SelectGenre';

export default function Movies() {
  const [isScrolled, setIsScrolled] = useState(false)
//   const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
    // eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tvshows" }));
    }
    // eslint-disable-next-line
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }
  // console.log(movies)
  return (
    <Container>
        <div className="nav">
      <Navbar isScrolled={isScrolled} />
        </div>
        <div className="movies">
            
            {movies.length ? <Slider movies={movies} /> : <NotAvaliable/>}
        </div>
      
      
    </Container>
  )
}

const Container = styled.div`
    background-color: black;
.movies{
margin-top: 8rem;
}
.hero{
  position: relative;
  .background-image{
    filter: brightness(60%);
  }
  img{
    width: 100vw;
    height: 100vh;
  }
  .container{
    position: absolute;
    bottom: 5rem;
    .logo{
      img{
        width: 100%;
        height: 100%;
        margin-left: 5rem;
      }
    } 
    .buttons{
      margin: 5rem;
      gap: 2rem;
      button{
        font-size: 1.4rem;
        gap: 1rem;
        border-radius: 0.2rem;
        padding: 0.5rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        cursor: pointer;
        border: none;
        transition: 0.3s ease-in-out ;
        &:hover{
          opacity: 0.8;
        }
        &:nth-of-type(2){
          background-color: rgba(109,109,110,0.7);
          color: white;
          svg{
            font-size: 1.8rem;
          }
        }
      }
    }
  }
}
`;