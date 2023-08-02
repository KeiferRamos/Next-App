"use client";

import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

type PropsType = {
  children: React.ReactNode;
  imageSrc: string;
  height: string;
  width: string;
  mobileImage?: string;
};

const StyledContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;

function ImageBanner({
  children,
  imageSrc,
  height,
  width,
  mobileImage,
}: PropsType) {
  return (
    <StyledContainer style={{ width, height }}>
      <picture>
        <source media="(max-width: 500px)" srcSet={mobileImage} />
        <Image src={imageSrc} alt="" fill={true} />
      </picture>
      {children}
    </StyledContainer>
  );
}

export default ImageBanner;
