import axios from "axios";
import {
  homeBannerType,
  landingCategories,
  curatedCollectionType,
} from "../types";

export const getHomeBannerData = (): Promise<homeBannerType> => {
  return axios("/api/homeBanner", {
    method: "GET",
  }).then(({ data }) => data);
};

export const getLandingCategories = (): Promise<landingCategories> => {
  return axios("/api/landingCategories", {
    method: "GET",
  }).then(({ data }) => data);
};

export const getCuratedCollection = (): Promise<curatedCollectionType> => {
  return axios("/api/curatedCollection", {
    method: "GET",
  }).then(({ data }) => data);
};
