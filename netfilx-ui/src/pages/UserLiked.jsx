import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserLikedMovies } from '../store';
import Card from '../components/Card';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';



export default function Movies() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email,setEmail] = useState(undefined);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
        setEmail(currentUser.email)
    }
    else navigate("/login")
  })

  useEffect(() => {
    if (email) {
      dispatch(fetchUserLikedMovies(email));
    }
    // eslint-disable-next-line
  }, [email]);
  


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }
  
  return (
    <Container>
       
      <Navbar isScrolled={isScrolled} />
       
        <div className="content flex column ">
            <h2>My List</h2>
            <div className="grid flex">
            {movies.map((movie,index)=>{
                
                return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>
            }) }
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
.content{
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h2{
        margin-left: 3rem;
    }
    .grid{
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
}
`;