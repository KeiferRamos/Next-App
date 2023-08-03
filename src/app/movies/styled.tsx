"use client";

import styled from "styled-components";

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, auto));
  gap: 10px;
  padding: 3.75em 1.5em 1.5em 1.5em;
  text-transform: capitalize;

  h3 {
    color: #fff;
  }

  span {
    font-size: 16px;
    margin-top: 5px;
  }

  @media (max-width: 500px) {
    padding: 3.75em 10px 10px 10px;
  }
`;
