import getMovieById from "@/lib/api/getMovieById";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "antd";
import { StyledBanner, StyledCastContainer, StyledHeader } from "./styles";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { Metadata } from "next";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledChild } from "@/app/styles";

type Props = {
  params: { title: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const response = await getMovieById(params.title);

  return {
    title: response.title,
    description: response.plot,
    openGraph: {
      images: [response.image],
    },
  };
};

async function MoviePage({ params: { title } }: Props) {
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
  } = await getMovieById(title);

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
          <button>
            <AiOutlineVideoCamera />
            Watch Trailer
          </button>
        </div>
      </StyledBanner>
      <StyledHeader style={{ padding: 10 }}>Similar Movies</StyledHeader>
      <Carousel slidesToShow={3}>
        {similar.map(({ image, title, _id }) => {
          return (
            <ImageBanner imageSrc={image} key={_id} width="100%" height="300px">
              <StyledChild style={{ padding: "30px" }}>
                <h2>{title}</h2>
                <Link href={`/movies/${_id}`}>
                  <FiAlertCircle />
                  view more
                </Link>
              </StyledChild>
            </ImageBanner>
          );
        })}
      </Carousel>
      <StyledHeader style={{ paddingBottom: 10 }}>Cast</StyledHeader>

      <StyledCastContainer>
        <div className="cast-carousel">
          <Carousel slidesToShow={2}>
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
    </div>
  );
}

export default MoviePage;
