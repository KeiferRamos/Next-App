import getAllMovies from "@/lib/api/getAllMovies";
import React from "react";
import { FiInfo } from "react-icons/fi";
import Link from "next/link";
import { StyledList } from "./styled";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledChild } from "../styles";

async function MoviesPage() {
  const data = await getAllMovies({});

  return (
    <StyledList>
      {data.map(({ title, genres, image, _id, mobileImage }) => {
        return (
          <ImageBanner
            imageSrc={image}
            mobileImage={mobileImage}
            height="300px"
            width="auto"
            key={_id}
          >
            <StyledChild style={{ padding: "10px" }}>
              <h3>{title}</h3>
              <div>
                {genres.map((genre) => {
                  return <span key={genre}>{genre}</span>;
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
    </StyledList>
  );
}

export async function generateStaticParams() {
  const data = await getAllMovies({});

  return data.map(({ title }) => ({
    title: title.split(" ").join("-").toLowerCase(),
  }));
}

export default MoviesPage;
