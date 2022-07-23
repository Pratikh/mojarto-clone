// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { arrivalCollection } from "../../types";

type arrivalApiData = {
  content: arrivalCollection;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<arrivalCollection>
) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=15110, stale-while-revalidate=16110"
  );
  let responseData: arrivalCollection | arrivalApiData = await (
    await fetch("https://api.mojarto.com/public/landing/" + req.query.arrival)
  ).json();

  let bannerData: arrivalApiData = {
    content: {},
  };
  if (responseData.content) {
    bannerData.content = responseData.content;
  } else {
    bannerData = responseData;
  }
  const finalResponse = bannerData.content.map(
    ({
      artworkImageUrl,
      defaultImageUrl,
      artistName,
      creatorName,
      category,
      categoryName,
      discountPercentage,
      discountedPriceAfterTax,
      listPriceAfterTax,
      title,
      medium,
      mediumName,
      heightInInches,
      widthInInches,
    }) => {
      return {
        artworkImageUrl,
        defaultImageUrl,
        artistName,
        creatorName,
        category,
        categoryName,
        discountPercentage,
        discountedPriceAfterTax,
        listPriceAfterTax,
        title,
        medium,
        mediumName,
        heightInInches,
        widthInInches,
      };
    }
  );
  console.log(finalResponse);

  res.status(200).json(finalResponse);
}
