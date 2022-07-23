import React from "react";
import { getLandingCategories } from "../services/homepageApi";
import { useQuery } from "react-query";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ExploreByCategory() {
  const { data } = useQuery("getLandingCategories", getLandingCategories);
  return (
    <div>
      <h2>EXPLORE BY CATEGORY</h2>
      <div className={styles.categoryTileContainer}>
        {data?.map((a) => (
          <div key={a.name} className={styles.categoryTile}>
            <Image src={a.bannerImageUrl} width={80} height={80} alt={a.name} className={styles.categoryImage}/>
            <div className={styles.categoryNameAndCunt}>
              <b>{a.name}</b>
              <p>{a.artworkCount} {a.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
