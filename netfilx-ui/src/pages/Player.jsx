import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import viedo from '../assets/strangerthings.mp4'
import { useNavigate } from 'react-router-dom'


export default function Player() {
    const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
            <BsArrowLeft onClick={()=>navigate(-1)} />
        </div>
        <video src={viedo} autoPlay controls loop muted></video>
      </div>
    </Container>
  )
}

const Container = styled.div`
.player{
    height: 100vh;
    width: 100vw;
    .back{
        padding: 3rem;
        position: absolute;
        z-index: 1;
        svg{
            font-size: 3rem;
            cursor: pointer;
        }
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`;