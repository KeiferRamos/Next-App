import axios from "axios";
import { MovieType } from "../types/movies";

export default async function () {
  const { data }: { data: MovieType[] } = await axios.get(
    `${process.env.BASE_URL}/movies`
  );

  return data.filter(({ featured }) => featured);
}
