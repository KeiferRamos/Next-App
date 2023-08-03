"use client";

import styled from "styled-components";

export const StyledBanner = styled.div`
  position: relative;
  height: 85vh;

  img,
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    display: flex;
    justify-content: end;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    color: #bebebe;
    padding: 20px;
    gap: 5px;

    .plot {
      max-width: 60%;
    }

    header {
      color: #f2ad0d;

      h1 {
        color: #fff;
      }
    }

    .genres {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      span {
        background: #ea6262;
        color: #fff;
        padding: 5px 10px;
        font-size: 13px;
        border-radius: 3px;
      }
    }

    button {
      width: max-content;
      padding: 10px;
      font-size: 16px;
      margin-top: 5px;
      background: #eb5f08;
      color: #ffff;
      border-radius: 2px;
      cursor: pointer;

      svg {
        margin-right: 5px;
      }
    }

    @media (max-width: 700px) {
      padding: 10px;

      .plot {
        max-width: 100%;
      }
    }
  }
`;

export const StyledCastContainer = styled.div`
  .cast-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    background: rgba(0, 0, 0, 0.9);
    gap: 10px;
    padding: 0 10px 10px 10px;
    font-size: 13px;
  }

  .cast-carousel {
    display: none;
    position: relative;

    .cast-info-circle {
      display: flex !important;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding-bottom: 30px;
      gap: 10px;

      h3 {
        font-size: 20px;
      }

      background: rgba(0, 0, 0, 0.9);
      color: #fff;

      img {
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  .cast-info {
    background: #fff;
    padding: 5px;
    position: relative;
    height: 250px;

    div {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
      padding: 10px;

      span {
        color: #1693ec;
        font-weight: bold;
      }
    }

    img {
      object-fit: cover;
    }
  }

  @media (max-width: 500px) {
    .cast-carousel {
      display: block;
    }

    .cast-list {
      display: none;
    }
  }
`;

export const StyledHeader = styled.h2`
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  color: #bebebe;
`;
