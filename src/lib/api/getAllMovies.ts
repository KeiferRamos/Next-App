import axios, { AxiosRequestConfig } from "axios";
import { MovieType } from "../types/movies";

type ParamsType = {
  genres?: "romance" | "food" | "sports" | "action" | "comedy" | "animated";
  limit?: number;
  skip?: number;
  featured?: 1 | 0;
  "rank.isRanked"?: 1 | 0;
};

export default async function (params: ParamsType): Promise<MovieType[]> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${process.env.BASE_URL}/movies`,
    params,
  };

  const { data } = await axios.request(options);
  return data;
}
