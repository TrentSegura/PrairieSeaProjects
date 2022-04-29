import React from "react";
import { HeaderContainer, Logo, Copyright } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo onClick={() => window.scrollTo(0, 0)}>Prairie Sea Projects</Logo>
        <Copyright>© 2021 PRAIRIE SEA PROJECTS</Copyright>
      </HeaderContainer>
    </>
  );
};

export default Header;
