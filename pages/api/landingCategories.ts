// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { landingCategories } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<landingCategories>
) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=15110, stale-while-revalidate=16110"
  );
  const bannerData = (await (
    await fetch("https://api.mojarto.com/public/landing/categories")
  ).json()) as landingCategories;
  const finalResponse = bannerData.map(
    ({ name, artworkCount, bannerImageUrl }) => {
      return {
        name,
        artworkCount,
        bannerImageUrl,
      };
    }
  );
  res.status(200).json(finalResponse);
}
