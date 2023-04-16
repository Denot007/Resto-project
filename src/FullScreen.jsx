import React from 'react'
import styled from "styled-components";


const Section = styled.section`

  height: 382px;
  margin: 0 auto;
  width: var(--lg);
`;

const FullScreen = ({children , style }) => {
  return (
    <Section style={style}>{children}</Section>
  )
}

export default FullScreen