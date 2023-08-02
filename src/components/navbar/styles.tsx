"use client";

import styled from "styled-components";

export const StyledSidebar = styled.aside`
  .desktop-nav,
  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    z-index: 10;
    color: #ede8e8;
    width: 100%;

    h1 {
      letter-spacing: 2px;

      span {
        color: #908f8f;
      }
    }
  }

  svg {
    color: #f1ecec;
    font-size: 25px;
    margin-left: 10px;
  }

  .desktop-nav {
    gap: 20px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .links {
      display: flex;
      gap: 20px;

      a {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bolder;
        color: #bbb9b9;
      }

      .active {
        color: #ec6767;
      }
    }

    .social-medias {
      margin-left: auto;
    }
  }

  .mobile-nav {
    display: none;
    z-index: 100;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media (max-width: 700px) {
    .desktop-nav {
      display: none;
    }
    .mobile-nav {
      display: block;
    }
  }
`;

export const SideContent = styled.div`
  position: fixed;
  top: 0;
  right: 100%;
  width: 100%;
  height: 100vh;
  background: #161615;
  padding: 20px;
  transition: all 0.7s;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 25px;
  }

  .social-medias {
    margin-top: auto;
  }

  .links {
    display: grid;
    gap: 15px;

    button {
      background: transparent;
      font-size: 16px;
      text-align: start;
      color: #bebebe;
      border: 1px solid;
      padding: 15px;
      cursor: pointer;
    }
  }
`;
