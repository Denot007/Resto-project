import React from "react";
import TestimonialsCard from "../../cards/TestimonialsCard";
import FullScreen from "../../FullScreen";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
  margin: 0 auto;
  height: fit-content;
`;

const Heading = styled.h2`
color: var(--dark);
  margin: 4rem auto;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  padding-top: 1rem;
`;
const fullscreen = {
  height: "fit-content",
  margin: "0 auto",
  padding: '0 0 2rem  0'
};


const Testimonials = () => {
  return (
    <FullScreen style={fullscreen}>
      <Heading>Testimonials</Heading>
      <Box className="container">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </Box>
    </FullScreen>
  );
};

export default Testimonials;
