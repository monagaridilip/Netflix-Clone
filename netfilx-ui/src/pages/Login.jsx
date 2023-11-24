import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { email, password } = formValues
      await signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/")
  })
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="container flex column">
              <input type="email" name="email" id="email" placeholder='Email Address'
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />

              <input type="password" name="password" id="password" placeholder='password'
                value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
            <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
position:relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 15vh 85vh;   
    .form-container{
      gap: 2rem;
      height: 85vh;
      .form{
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container{
          gap: 2rem;
          input{
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button{
            padding: 0.5rem 1rem;
    background-color: #e50914;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 1.05rem;
    font-weight: bolder;
    border-radius: 0.2rem;
          }
        }
      }
    }
}

`;