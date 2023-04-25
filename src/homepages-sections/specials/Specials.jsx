import React from "react";
import FullScreen from "../../FullScreen";
import OnlineMenuCard from "../../cards/OnlineMenuCard";
import styled from "styled-components";
import { onlineCardData } from "../../data";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  margin:  auto;





  @media (max-width: 768px) {
    display: block;
  }

`;
const fullScreen = {
  // background: "var(--white)",
  margin: "10rem auto",
  height: "fit-content",
  
};

const Specials = () => {
  return (
    <FullScreen style={fullScreen}>
      <Box style={{paddingTop: '1rem'}} className="container">
        <h2>This Week Specials !</h2>
        <button>Online Menu</button>
      </Box>

      <Box className="container">
        {onlineCardData.map(({ ...onlineCardData }) => (
          <div key={onlineCardData.id}>
            <OnlineMenuCard {...onlineCardData} />
          </div>
        ))}
      </Box>
    </FullScreen>
  );
};

export default Specials;
