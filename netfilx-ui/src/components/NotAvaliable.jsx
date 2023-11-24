import React from 'react'
 import styled from 'styled-components'

export default function NotAvaliable() {
  return (
    <Container>
    <h3 className='flex j-center a-center'>
      Not avaliable at this movement <br />
      Try again later.
    </h3>
    </Container>
  )
}

const Container = styled.div` 
margin-top:16rem;
`;