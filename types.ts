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

export type arrivalCollection = {
  artworkImageUrl:string; //defaultImageUrl
  defaultImageUrl:string; //defaultImageUrl
  artistName: string;//creatorName
  creatorName: string;//creatorName
  category: string;//categoryName
  categoryName: string;//categoryName
  discountPercentage: number;
  discountedPriceAfterTax:number,
  listPriceAfterTax: string;
  title: string;
  medium: string;//mediumName
  mediumName: string;//mediumName
  heightInInches: number;
  widthInInches: number;
}[];
