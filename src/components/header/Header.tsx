import React from "react";
import { Style } from "./Header.styled";
function Header() {
  return (
    <div>
      <Style.HeaderContainer>
        <h1>React Movies Posters</h1>
      </Style.HeaderContainer>
    </div>
  );
}

export default Header;
