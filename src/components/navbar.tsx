import { Link } from "solid-app-router";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { COLORS } from "../constants";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background-color: #adc2ca;
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: ${COLORS.primary};
  }
`;

export const Navbar: Component = () => {
  return (
    <StyledNav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
    </StyledNav>
  );
};
