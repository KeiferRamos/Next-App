import findGenre from "@/lib/api/findGenre";
import { MovieContainer, StyledContainer } from "./styled";
import { FiInfo } from "react-icons/fi";
import getAllMovies from "@/lib/api/getAllMovies";
import React from "react";
import { BiMessage } from "react-icons/bi";
import Image from "next/image";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledChild } from "@/app/styles";
import Link from "next/link";
import { Carousel } from "antd";

async function GenrePage({ params: { genre } }: { params: { genre: string } }) {
  const data = await getAllMovies();

  const { mobileImage, name, image, description } = await findGenre(genre);

  const filteredData = data.filter(({ genres }) => genres.includes(genre));

  return (
    <StyledContainer>
      <div className="image-container">
        <picture>
          <source srcSet={mobileImage} media="(max-width:500px)" />

          <Image src={image} alt="" fill />
        </picture>

        <div>
          <span>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>
              <BiMessage />
              &nbsp; Talk to us
            </button>
          </span>
        </div>
      </div>
      <div className="title">
        <h3>{name} movies</h3>
      </div>
      <MovieContainer className="desktop-list">
        {filteredData.map(({ image, genres, title, mobileImage, _id }) => {
          return (
            <ImageBanner
              width="100%"
              height="35vh"
              imageSrc={image}
              key={_id}
              mobileImage={mobileImage}
            >
              <StyledChild style={{ padding: "20px" }}>
                <h2>{title}</h2>
                <div>
                  {genres.map((genre) => {
                    return (
                      <span key={genre} style={{ fontSize: "15px" }}>
                        {genre}
                      </span>
                    );
                  })}
                </div>
                <Link href={`/movies/${_id}`}>
                  <FiInfo />
                  view more
                </Link>
              </StyledChild>
            </ImageBanner>
          );
        })}
      </MovieContainer>
      <Carousel className="mobile-carousel">
        {filteredData.map(({ image, mobileImage, title, genres, _id }) => {
          return (
            <ImageBanner
              width="100%"
              height="100vh"
              key={_id}
              imageSrc={image}
              mobileImage={mobileImage}
            >
              <StyledChild style={{ padding: "40px 20px" }}>
                <h2>{title}</h2>
                <div>
                  {genres.map((genre) => {
                    return (
                      <span key={genre} style={{ fontSize: "15px" }}>
                        {genre}
                      </span>
                    );
                  })}
                </div>
                <Link href={`/movies/${_id}`}>
                  <FiInfo />
                  view more
                </Link>
              </StyledChild>
            </ImageBanner>
          );
        })}
      </Carousel>
    </StyledContainer>
  );
}

export default GenrePage;
