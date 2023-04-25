import React from "react";
import FullScreen from "../../FullScreen";
import styled from "styled-components";
import { aboutSectionData } from "../../data";

const Box = styled.div`
  height: 35rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

// ======================= TEXT SECTION =======================

const TextContainer = styled.div`
  height: 100%;
  border: 5px solid var(--primary-yelow-variant);
`;
const H1 = styled.h1`
  color: var(--primary-green);
  margin-top: 0.8rem;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
`;
const H4 = styled.h4`
  color: var(--dark);

  margin: -1rem 0 0 0;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
`;
const P = styled.p`
  color: var(--dark);
  font-size: 1.2rem;
  margin: 1rem 2rem 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;
// =================== IMAGE SECTION =====================
const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 5px solid var(--primary-yelow-variant);

  @media (max-width: 768px) {
    display: none;
    width: 10rem;
    height: 10rem;
  }
`;

const Image = styled.img`
  top: 10%;
  left: 45%;
  position: absolute;
  width: 40%;
  height: 40%;
  border-radius: 1rem;
  border-radius: 50%;
  border: 5px solid var(--light-green);
`;

const Image2 = styled.img`
  top: 40%;
  left: 10%;
  position: absolute;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  //border-radius: 1rem;
  border: 5px solid var(--light-green);
`;

const fullScreen = {
  height: "fit-content",

  "@media (max-width: 700px)": {
    background: "var(--primary-yelow)",
  },
};

// ****************************************************************
//{ src, alt, companyName, location, description, id }
// ****************************************************************

const About = () => {
  return (
    <FullScreen style={fullScreen}>
      {aboutSectionData.map(
        ({
          user_one,
          user_two,
          location,
          companyName,
          id,
          description,
          alt,
        }) => (
          <Box key={id} className="container">
            <TextContainer>
              <H1>{companyName}</H1>
              <H4>{location}</H4>
              <P>{description}</P>
            </TextContainer>
            <ImageContainer>
              <div>
                <Image src={user_two} alt={alt} />
                <Image2 src={user_one} />
              </div>
            </ImageContainer>
          </Box>
        ),
      )}
    </FullScreen>
  );
};

export default About;
