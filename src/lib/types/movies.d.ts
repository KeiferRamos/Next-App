export type MovieType = {
  rank: {
    isRanked: boolean;
    rankNumber: number;
  };
  _id: string;
  title: string;
  year: string;
  image: string;
  mobileImage: string;
  trailer: string;
  featured: boolean;
  cast: {
    name: string;
    asCharacter: string;
    image: string;
    _id: string;
  }[];
  genres: string[];
  plot: string;
  similar: {
    image: string;
    title: string;
    _id: string;
    movieId: string;
  }[];
  likes: string[];
  reviews: {
    createdAt: string;
    updatedAt: string;
    username: string;
    userImage: string;
    review: string;
    stars: string;
    title: string;
    _id: string;
  }[];
};
