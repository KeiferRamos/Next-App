"use client";

import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 100vh;
  position: relative;

  .title {
    height: 40px;
    padding: 0 1.5em;
    display: flex;
    text-transform: capitalize;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    color: #bebebe;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .mobile-carousel {
    display: none;
  }

  .image-container {
    height: calc(65vh - 50px);
    width: 100%;
    position: relative;

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: end;
      padding: 20px;
      color: #bebebe;

      span {
        max-width: 40%;

        @media (max-width: 700px) {
          max-width: 100%;
        }

        p {
          font-family: "Montserrat", sans-serif;
          line-height: 25px;

          @media (max-width: 700px) {
            font-size: 13px;
          }
        }

        h1 {
          color: #fff;
          text-transform: capitalize;
        }

        button {
          padding: 10px 15px;
          margin-top: 8px;
          background: #eb5f08;
          color: #ffff;
          border-radius: 2px;
        }
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 700px) {
      height: 60vh;
    }
  }

  @media (max-width: 500px) {
    .mobile-carousel {
      display: block;
    }
  }
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  padding: 0 1.5em;
  padding-bottom: 1em;
  background: rgba(0, 0, 0, 0.9);
  gap: 5px;

  h2 {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    padding: 0;
    gap: 0;
    display: none;
  }
`;
