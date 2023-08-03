import getMovieById from "@/lib/api/getMovieById";
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel/carousel";
import { StyledBanner, StyledCastContainer, StyledHeader } from "./styles";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { Metadata } from "next";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledChild } from "@/app/styles";

import Player from "@/components/Player/player";

type ParamsType = {
  params: { title: string };
  searchParams: { id: string };
};

export const generateMetadata = async ({
  searchParams: { id },
}: ParamsType): Promise<Metadata> => {
  const response = await getMovieById(id);

  return {
    title: response.title,
    description: response.plot,
    openGraph: {
      images: [response.image],
    },
  };
};

async function MoviePage({ searchParams: { id } }: ParamsType) {
  const {
    title: name,
    year,
    image,
    cast,
    genres,
    plot,
    trailer,
    mobileImage,
    similar,
  } = await getMovieById(id);

  return (
    <div>
      <StyledBanner>
        <picture>
          <source srcSet={mobileImage} media="(max-width: 700px)" />
          <Image src={image} alt="" fill />
        </picture>
        <div className="info">
          <header>
            <h1>{name}</h1>
            <span>{year}</span>
          </header>
          <div
            className="plot"
            dangerouslySetInnerHTML={{
              __html: plot,
            }}
          />
          <div className="genres">
            {genres.map((genre, i) => {
              return <span key={i}>{genre}</span>;
            })}
          </div>
        </div>
      </StyledBanner>
      <StyledHeader style={{ padding: 10 }}>Similar Movies</StyledHeader>
      <Carousel>
        {similar.map(({ image, title, movieId, _id }) => {
          return (
            <ImageBanner imageSrc={image} key={_id} width="100%" height="300px">
              <StyledChild style={{ padding: "30px" }}>
                <h2>{title}</h2>
                <Link
                  href={{
                    pathname: `/movies/${title
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`,
                    query: {
                      id: movieId,
                    },
                  }}
                >
                  <FiAlertCircle />
                  view more
                </Link>
              </StyledChild>
            </ImageBanner>
          );
        })}
      </Carousel>
      <StyledHeader style={{ padding: 10 }}>Cast</StyledHeader>
      <StyledCastContainer>
        <div className="cast-carousel">
          <Carousel>
            {cast.map(({ name, asCharacter, image, _id }) => {
              return (
                <div className="cast-info-circle" key={_id}>
                  <Image src={image} alt="" width={180} height={180} />
                  <div>
                    <h3>{name}</h3>
                    <span>{asCharacter}</span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="cast-list">
          {cast.map(({ name, asCharacter, image, _id }) => {
            return (
              <div className="cast-info" key={_id}>
                <Image src={image} alt="" fill />
                <div>
                  <h3>{name}</h3>
                  <p>
                    as <span>{asCharacter}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </StyledCastContainer>
      <Player url={trailer}></Player>
    </div>
  );
}

export default MoviePage;
