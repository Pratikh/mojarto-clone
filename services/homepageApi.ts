import axios from "axios";
import {
  homeBannerType,
  landingCategories,
  curatedCollectionType,
  arrivalCollection,
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

export const getArrivals = (arrival: string): Promise<arrivalCollection> => {
  return axios("/api/arrivalProducts", {
    method: "GET",
    params: {
      arrival: arrival || "newArrivals",
    },
  }).then(({ data }) => data);
};
