import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeCarousal from "../components/HomeCarousal";
import {
  getHomeBannerData,
  getLandingCategories,
  getCuratedCollection,
  getArrivals,
} from "../services/homepageApi";
import { dehydrate, QueryClient } from "react-query";
import { GetServerSideProps } from "next";
import ExploreByCategory from "../components/ExploreByCategory";
import CuratedCollection from "../components/CuratedCollection";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeCarousal />
      <ExploreByCategory />
      <CuratedCollection />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const allPromise = [];
  allPromise.push(
    queryClient.prefetchQuery("getHomeBannerData", getHomeBannerData, {
      staleTime: Infinity,
    })
  );
  allPromise.push(
    queryClient.prefetchQuery("getLandingCategories", getLandingCategories, {
      staleTime: Infinity,
    })
  );
  allPromise.push(
    queryClient.prefetchQuery("getCuratedCollection", getCuratedCollection, {
      staleTime: Infinity,
    })
  );
  allPromise.push(
    queryClient.prefetchQuery(
      "getArrivals",
      getArrivals.bind(null, "newArrivals"),
      {
        staleTime: Infinity,
      }
    )
  );
  await Promise.all(allPromise);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default Home;
