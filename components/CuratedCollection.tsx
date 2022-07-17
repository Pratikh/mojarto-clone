import React from "react";
import { getCuratedCollection } from "../services/homepageApi";
import { useQuery } from "react-query";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function CuratedCollection() {
  const { data } = useQuery("getCuratedCollection", getCuratedCollection);
  return (
    <div>
      {data?.map((a) => (
        <div key={a.title}>
          <Image
            src={a.bannerImageStorageUrl}
            width={100}
            height={100}
            alt={a.title}
          />
        </div>
      ))}
    </div>
  );
}
