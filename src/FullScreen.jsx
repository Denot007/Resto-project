import React from 'react'
import styled from "styled-components";


const Section = styled.section`
  margin: 0 auto;
  width: var(--lg);

  @media (max-width: 768px) {
    width: 90%;
    height: 10rem;
    background-color: #209696;
  }
`;

const FullScreen = ({children , style }) => {
  return (
    <Section style={style}>{children}</Section>
  )
}

export default FullScreen