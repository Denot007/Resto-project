import React from "react";
import styled from "styled-components";
import FullScreen from "../../FullScreen";
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
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 1rem;
  border: 5px solid var(--light-green);
`;

const Banner = () => {
  return (
    <FullScreen style={{ background: "var(--primary-green)" }}>
      <Box className="container">
        <TextContainer>
          <H1>Jeans Creole Café</H1>
          <H4>Orlando</H4>
          <P>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur perferendis earum unde nihil, consectetur in nobis
            fugiat quidem voluptas quasi incidunt doloremque enim fuga.
          </P>
          <button>Reseerve a Table</button>
        </TextContainer>

        <ImageContainer>
          <Image
            src="https://qph.cf2.quoracdn.net/main-qimg-a3fb9e294f70d55c5f7df124d535e6dc-lq"
            alt=""
          />
        </ImageContainer>
      </Box>
    </FullScreen>
  );
};

export default Banner;
