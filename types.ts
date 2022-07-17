export type landingCategories = {
  artworkCount: number;
  name: string;
  bannerImageUrl: string;
}[];

export type homeBannerType = {
  id: number;
  name: string;
  externalUrl: string;
  bannerImageUrl: string;
}[];

export type curatedCollectionType = {
  id: number;
  title: string;
  externalUrl: string;
  bannerImageStorageUrl: string;
  description: string;
}[];
