import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis/index";

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log(res);
    });
  }, []);
  return <Layout>トップページ</Layout>;
};

export default Top;
