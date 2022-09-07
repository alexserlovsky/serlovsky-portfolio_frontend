import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

const HeaderContainer = styled.header`
`;
function Header(props) {
  const data = props.data;
  console.log(data);
  return (
    <HeaderContainer>
      <div className="logo-box">
      </div>
      <ul className="header-links"></ul>
    </HeaderContainer>
  )
}

export default Header;