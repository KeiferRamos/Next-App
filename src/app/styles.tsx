"use client";

import styled from "styled-components";

export const StyledChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding: 5em;
  font-size: 1.25em;

  h2 {
    color: #fff;
  }

  p {
    color: #bebebe;
    font-size: 16px;
    width: 80%;
  }

  div {
    display: flex;
    gap: 5px;
    text-transform: capitalize;
    color: #bebebe;
  }

  a {
    width: max-content;
    margin-top: 10px;
    padding: 10px 15px;
    background: #b85804;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    border-radius: 3px;
    color: #c8c7c7;
    font-size: 12px;
    font-weight: bolder;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    padding: 50px 20px;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.9);

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    font-weight: bolder;

    img {
      width: 120px;
      animation: mymove 2s infinite;
    }
  }

  @keyframes mymove {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
`;
