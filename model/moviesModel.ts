import { Schema, model } from "mongoose";

interface IMovie {
  title: String;
  plot: String;
  runtime: Number;
  rated: String;
  cast: String[];
  num_mflix_comments: Date;
  poster: String;
  fullplot: String;
  languages: String[];
  released: Number;
  directors: [String];
  writers: [String];
  awards: { wins: Number; nominations: Number; text: String };
  lastupdated: String;
  year: Number;
  imdb: { rating: Number; votes: Number; id: Number };
  countries: [String];
  type: String;
  tomatoes: {
    viewer: { reating: Number; numReviews: Number; meter: Number };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<IMovie>();

const movie = model("movie", movieSchema);

export default movie;
