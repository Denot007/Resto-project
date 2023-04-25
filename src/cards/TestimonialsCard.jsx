import React from "react";
import styled from "styled-components";
import { testimonialData } from "../data.js";

const Image = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-top: 1rem;
`;
const Heading = styled.h5`
  margin: 0.5rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: var(--primary-green);
`;
const Box = styled.div`
  width: 183px;
  height: fit-content;
  background-color: var(--light-green);
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: var(--primary-green);
  }
`;
const Paragraph = styled.p`
  margin-top: 1rem;
  padding-bottom: 1rem;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.02em;
  text-align: center;
`;

const TestimonialsCard = () => {
  return testimonialData.map(
    ({ id, userName, alt, userProfile, icons, description }) => (
      <Box key={id}>
        <Image src={userProfile} alt={alt} />
        <Heading>{userName}</Heading>
        <Icon>{icons}</Icon>
        <Paragraph> {description} </Paragraph>
      </Box>
    ),
  );
};

export default TestimonialsCard;
