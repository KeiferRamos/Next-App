import findGenre from "@/lib/api/findGenre";
import { StyledContainer } from "./styled";
import { FiInfo } from "react-icons/fi";
import getAllMovies from "@/lib/api/getAllMovies";
import React from "react";
import { BiMessage } from "react-icons/bi";
import Image from "next/image";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledChild } from "@/app/styles";
import Link from "next/link";
import Carousel from "@/components/carousel/carousel";

async function GenrePage({
  params: { genre },
  searchParams: { id },
}: {
  params: { genre: any };
  searchParams: { id: string };
}) {
  const data = await getAllMovies({ genres: genre });

  const genreType = await findGenre(id);
  const { mobileImage, name, image, description } = genreType;

  return (
    <StyledContainer>
      <div className="image-container">
        <picture>
          <source srcSet={mobileImage} media="(max-width:500px)" />
          <Image src={image} alt="" fill />
        </picture>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <button>
            <BiMessage />
            &nbsp; Talk to us
          </button>
        </div>
      </div>
      <div className="title">
        <h3>{name} movies</h3>
      </div>
      <Carousel>
        {data.map(({ image, title, genres, _id }) => {
          return (
            <ImageBanner width="100%" height="35vh" key={_id} imageSrc={image}>
              <StyledChild style={{ padding: "30px 20px" }}>
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
                <Link
                  href={{
                    pathname: `/movies/${title
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`,
                    query: {
                      id: _id,
                    },
                  }}
                >
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
