import React, { MutableRefObject } from "react";
import { getCuratedCollection } from "../services/homepageApi";
import { useQuery } from "react-query";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function CuratedCollection() {
  const { data } = useQuery("getCuratedCollection", getCuratedCollection);
  const scrollerRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const lastElementRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const showNext = () => {
    scrollerRef.current.scrollLeft += lastElementRef.current.offsetWidth;
  };
  const showPrev = () => {
    scrollerRef.current.scrollLeft -= lastElementRef.current.offsetWidth;
  };
  return (
    <>
      <div>
        <h2>CURATED COLLECTIONS</h2>
        <div className={styles.curatedCollectionContainer} ref={scrollerRef}>
          {data?.map((a) => (
            <div
              key={a.title}
              className={styles.collectionTile}
              ref={lastElementRef}
            >
              <div className={styles.imageAndTextDiv}>
                <Image
                  src={a.bannerImageStorageUrl}
                  width={380}
                  height={380}
                  alt={a.title}
                />
                <div className={styles.curatedCollectionTextDiv}>
                  <h2>{a.title}</h2>
                  <h4>By {a.description}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <button onClick={showPrev} className={styles.carousalNavBtn}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button onClick={showNext} className={styles.carousalNavBtn}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
    </>
  );
}
