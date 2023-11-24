import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const [showpassword, setshowpassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const { email, password } = formValues
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })
  return (
    <Container showpassword={showpassword}>
      <BackgroundImage />
      <div className="content">

        <Header login/>
        <div className="body flex a-center j-center column">
          <div className="text flex column">
            <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
            <h4>Join today. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
          </div>
          <div className="form">
            <input type="email" name="email" id="email" placeholder='Email Address'
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
            {
              showpassword && <input type="password" name="password" id="password" placeholder='password'
                value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} />
            }
            {!showpassword && (<button onClick={() => setshowpassword(true)}>Get Started</button>)}
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
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
}
.body{
  gap: 1rem;
  .text{
    gap: 1rem;
    text-align: center;
    font-size: 2rem;
  }
  h1{
    padding: 0 25rem;
  }
}
.form{
  display: grid ;
  grid-template-columns: ${({ showpassword }) => showpassword ? "1fr 1fr" : "2fr 1fr"};
  width: 60%;
  input{
    color: black;
    border: none;
    padding: 1.5rem;
    font-size: 1.2rem;
    border: 1px solid black;
    &:focus{
      outline: none;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 1.05rem;
    font-weight: bolder;
  }
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

`;