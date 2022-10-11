import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    console.log(location);
    console.log(id);
  }, []);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
