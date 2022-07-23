import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { getHomeBannerData } from "../services/homepageApi";
import homeStyle from "../styles/Home.module.css";
export default function HomeCarousal() {
  const { data } = useQuery("getHomeBannerData", getHomeBannerData, {
    staleTime: Infinity,
  });

  const [currentShow, setCurrent] = React.useState(0);

  const showNext = () => {
    setCurrent((prev) => {
      return prev + 1 > data.length - 1 ? 0 : prev + 1;
    });
  };
  const showPrev = () => {
    setCurrent((prev) => {
      return prev - 1 < data.length - 1 && prev - 1 > 0
        ? prev - 1
        : data.length - 1;
    });
  };
  return (
    <div className={homeStyle.carousalContainer}>
      {data.map((a, index) => (
        <div
          key={a.name}
          style={{
            display: index === currentShow ? "block" : "none",
          }}
        >
          <Image
            src={a.bannerImageUrl}
            alt={a.name}
            width={1200}
            height={405}
            // layout='fill'
          />
        </div>
      ))}
      <div className={homeStyle.carousalNavBtnContainer}>
        <button onClick={showPrev} className={homeStyle.carousalNavBtn}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button onClick={showNext} className={homeStyle.carousalNavBtn}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
