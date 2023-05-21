import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav
  /* Navbar styles */
;

const NavbarMenu = styled.ul
  /* Navbar menu styles */
;

const NavbarItem = styled.li
  /* Navbar item styles */
;

const NavbarLink = styled.a
  /* Navbar link styles */
;

const NavbarToggle = styled.div
  /* Navbar toggle styles */
;

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavbarToggle onClick={toggleMobileMenu}>Toggle</NavbarToggle>
      <NavbarMenu isOpen={isMobileMenuOpen}>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/characters">Characters</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/episodes">Episode Guide</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/quiz">Quiz Game</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default NavigationBar;
