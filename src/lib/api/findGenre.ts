import axios from "axios";
import { Genre } from "../types/genres";

export default async function (genre: string) {
  const { data }: { data: Genre } = await axios.get(
    `${process.env.BASE_URL}/genres/${genre}`
  );

  return data;
}
