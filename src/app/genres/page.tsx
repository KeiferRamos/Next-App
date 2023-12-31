import getAllGenre from "@/lib/api/getAllGenre";
import React from "react";
import ImageBanner from "@/components/banner/imageBanner";
import { StyledGenreList } from "./styled";
import { StyledChild } from "../styles";
import { FiArchive } from "react-icons/fi";
import Link from "next/link";

async function GenreListPage() {
  const data = await getAllGenre();

  return (
    <StyledGenreList>
      {data.map(({ mobileImage, image, name, description, _id }) => {
        return (
          <ImageBanner
            height="400px"
            width="auto"
            mobileImage={mobileImage}
            imageSrc={image}
            key={_id}
          >
            <StyledChild style={{ padding: "25px" }}>
              <h2>{name}</h2>
              <p>{description}</p>
              <Link
                href={{
                  pathname: `/genres/${name}`,
                  query: {
                    id: _id,
                  },
                }}
              >
                <FiArchive />
                browse more
              </Link>
            </StyledChild>
          </ImageBanner>
        );
      })}
    </StyledGenreList>
  );
}

export async function generateStaticParams() {
  const data = await getAllGenre();

  return data.map(({ name }) => {
    return {
      genre: name,
    };
  });
}

export default GenreListPage;
