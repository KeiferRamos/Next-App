import axios from "axios";
import { MovieType } from "../types/movies";

export default async function (): Promise<MovieType[]> {
  const { data } = await axios.get(`${process.env.BASE_URL}/movies`);
  return data;
}
