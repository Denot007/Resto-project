import React from "react";
import styled from "styled-components";
import FullScreen from "../../FullScreen";
import { bannerData } from "../../data";
// ********************************************************

const Box = styled.div`
  height: 35rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

// ======================= TEXT SECTION =======================

const TextContainer = styled.div`
  height: 22rem;
`;
const H1 = styled.h1`
  color: var(--primary-yelow);
  margin-top: 0.8rem;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
`;
const H4 = styled.h4`
  color: var(--light-green);

  margin: -1rem 0 0 0;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
`;
const P = styled.p`
  color: var(--white);
  font-size: 1.2rem;
  margin: 1rem 2rem 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;
// =================== IMAGE SECTION =====================
const ImageContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;


    @media (max-width: 768px) {
      display: none;
    width: 10rem;
    height: 10rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 1rem;
  border: 5px solid var(--light-green);


  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }


`;

const fullScreen = {
  background: "var(--primary-green)",
  height: "382px",

  '@media (max-width: 700px)': {
    background: "var(--primary-yelow)"
  },
};

// ****************************************************************
//{ src, alt, companyName, location, description, id }
//
// ****************************************************************

const Banner = () => {
  return (
    <FullScreen style={fullScreen}>
      {bannerData.map(
        ({ src, location, companyName, id, description, alt }) => (
          <Box key={id} className="container">
            <TextContainer>
              <H1>{companyName}</H1>
              <H4>{location}</H4>
              <P>{description}</P>
              <button>Reseerve a Table</button>
            </TextContainer>
            <ImageContainer>
              <Image src={src} alt={alt} />
            </ImageContainer>
          </Box>
        ),
      )}
    </FullScreen>
  );
};

export default Banner;
