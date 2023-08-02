"use client";

import styled from "styled-components";

export const StyledGenreList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 3.75em 1.5em 1.5em 1.5em;
  background: rgba(0, 0, 0, 0.9);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
