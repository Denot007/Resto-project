import React from "react";
import styled from "styled-components";
import FullScreen from "../../FullScreen";
import { navLinks } from "../../data";

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  margin: 0 auto;
  z-index: 100;
  background: var(--light-green);

`;
const NavContainer = styled.div`

  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100% 100%;
  height: 100%;
  background: var(--light-green);

`;
// =============== LOGO Section ========================

const ImageContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 100%;
`;

const Span = styled.span`
  color: var(--primary-green);
  font-size: 2rem;
  font-weight: 800;
`;
// =============== NavLinks ============================
const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UL = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  width: 100%;
`;

const List = styled.li``;

const Link = styled.a`
  color: var(--primary-green );
  font-size: 1rem;
  font-weight: 400;
`;

const Nav = () => {
  return (
    <FullScreen>
    <NavLinks >
      <NavContainer className="container">
        <ImageContainer>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
            alt=""
          />
          <Span>Jean'</Span> <Span>s</Span>
        </ImageContainer>

        <LinkContainer>
          <UL>
            {navLinks.map(function ({ title, id, path }) {
              return (
                <List key={id}>
                  <Link href={path}>{title}</Link>
                </List>
              );
            })}
          </UL>
        </LinkContainer>
      </NavContainer>
    </NavLinks>
    </FullScreen>
  );
};

export default Nav;
