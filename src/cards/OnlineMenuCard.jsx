import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 250px;
  max-width: 310px;
  border-radius: 10px;
  background-color: var(--light-green);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.163);
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 100%;
    
  }
`;
// =============================================

const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
//================================

const TextContainer = styled.div`
  padding: 10px 15px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;
const Tittle = styled.h4`
  color: var(--dark);
`;
const Price = styled.h3`
  color: var(--secondary-rose);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  font-family: "Inter";
`;
const Paragraph = styled.p`
  margin: 22px 0 20px 0;
  color: var(--primary-green);
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: left;
`;
const OrderForDelivery = styled.h5`
  margin: 0 0 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 1rem;

`;

const OnlineMenuCard = ({src, alt,icon, title, price,description,custom}) => {
  return (
    <Article>
      <>
        <Image
          src={src}
          alt={alt}
        />
      </>

      <TextContainer>
        <Box>
          <Tittle>{title}</Tittle>
          <Price>${price}</Price>
        </Box>
        <Paragraph>
          {description}
        </Paragraph>
        <OrderForDelivery>{custom} <span>{icon}</span></OrderForDelivery>
      </TextContainer>
    </Article>
  );
};

export default OnlineMenuCard;
