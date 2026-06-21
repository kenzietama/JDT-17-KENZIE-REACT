import API from "../api";
import type { ResponseData } from "./type";

export const getPopularMovies = async (page: number = 1) => {
  try {
    const response = await API.get(`movie/popular?page=${page}&language=en-US`);

    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async (page: number = 1) => {
  try {
    const response = await API.get(`movie/top_rated?page=${page}&language=en-US`);

    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getUpcomingMovies = async (page: number = 1) => {
  try {
    const response = await API.get(`movie/upcoming?page=${page}&language=en-US`);

    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

