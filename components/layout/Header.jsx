import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  .container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 50px;
    height: 150px;
    width: 100%;
    .logo-box {
      height: 100%;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
    .nav-button{
      display:none;
    }
    .header-links {
      display: flex;
      align-items: center;
      column-gap:50px;
      li,
      a {
        font-size: 1.75rem;
        font-weight: 600;
      }
      .page-link {
        position: relative;
        &:after{
          position:absolute;
          bottom:-10px;
          left:0;
          content:'';
          width:0px;
          height:5px;
          background-color: #8ddbff;
          transition:width 150ms;
        }
        &:hover {
          &:after{
            width:100%;
          }
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="logo-box">
          <Link href="/">
            <a className="logo-link">
              <img src="./ASLogo.png" alt="Alex Serlovsky Logo" />
            </a>
          </Link>
        </div>
        <button className = 'nav-button'></button>
        <ul className="header-links">
          <li className="link-list">
            <Link href="/about/">
              <a className="page-link">About</a>
            </Link>
          </li>
          <li className="link-list">
            <Link href="/projects/">
              <a className="page-link">Projects</a>
            </Link>
          </li>
          <li className="link-list">
            <Link href="/contact/">
              <a className="page-link">Contacts</a>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;
