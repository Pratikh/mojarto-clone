// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { curatedCollectionType } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<curatedCollectionType>
) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=15110, stale-while-revalidate=16110"
  );
  const bannerData = (await (
    await fetch("https://api.mojarto.com/public/landing/curatedCollection")
  ).json()) as curatedCollectionType;
  console.log({bannerData});
  
  const finalResponse = bannerData.map(
    ({ id, title, externalUrl, bannerImageStorageUrl, description }) => {
      return {
        id,
        title,
        externalUrl,
        bannerImageStorageUrl,
        description,
      };
    }
  );
  res.status(200).json(finalResponse);
}
