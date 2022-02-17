import BannerHeading from "./../bannerHeading/bannerHeading";
import Navbar from "./../navbar/navbar";
import Slide from "react-reveal/Slide";
import CardPanel from "./../cardPanel/cardPanel";
import { useEffect, useState } from "react";
import { client } from "./../../client";

const HomeBanner = () => {
  const [banner, setBanner] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "banner",
        select: "fields",
      })
      .then((res) => {
        setBanner(res.items[0].fields);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="banner">
      <Navbar />
      <BannerHeading data={banner && banner} />
      <Slide bottom delay={500} duration={1200}>
        <CardPanel data={banner && banner} />
      </Slide>

      <br />
      <br />
    </div>
  );
};

export default HomeBanner;
