import ImageBanner from "@/components/banner/imageBanner";
import { Carousel } from "antd";
import { StyledChild } from "./styles";
import { FiInfo } from "react-icons/fi";
import Link from "next/link";
import getAllMovies from "@/lib/api/getAllMovies";

export default async function Home() {
  const data = await getAllMovies({ featured: 1 });

  return (
    <main>
      <Carousel>
        {data.map(({ image, title, genres, _id, mobileImage }) => {
          return (
            <ImageBanner
              mobileImage={mobileImage}
              key={_id}
              width={"100%"}
              height={"100vh"}
              imageSrc={image}
            >
              <StyledChild>
                <h2>{title}</h2>
                <div>
                  {genres.map((genre, i) => {
                    return <span key={i}>{genre}</span>;
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
    </main>
  );
}
