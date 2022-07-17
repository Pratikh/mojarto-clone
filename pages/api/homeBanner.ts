// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { homeBannerType } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<homeBannerType>
) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=15110, stale-while-revalidate=16110"
  );
  const bannerData = (await (
    await fetch("https://api.mojarto.com/public/landing/homePageBanner")
  ).json()) as homeBannerType;
  const finalResponse = bannerData.map(
    ({ id, name, externalUrl, bannerImageUrl }) => {
      return {
        id,
        name,
        externalUrl,
        bannerImageUrl,
      };
    }
  );
  res.status(200).json(finalResponse);
}
