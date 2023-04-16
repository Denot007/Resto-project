import React from "react";
import styled from "styled-components";
import { navLinks } from "../../data";

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: white;
  margin: 0 auto;
  z-index: 100;
  background-color: var(--light-green);
`;
const NavContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

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
  gap: 1rem;
`;

const List = styled.li``;

const Link = styled.a`
  color: var(--primary-green );
  font-size: 1.2rem;
  font-weight: 500;
`;

const Nav = () => {
  return (
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
  );
};

export default Nav;
