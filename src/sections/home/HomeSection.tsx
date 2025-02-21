import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import HOME_CONSTANTS from "./HOME_CONSTANTS";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const image = require("../../assets/images/building.jpg");

const HomeSection = () => {
  return (
    <Page>
      <ParallaxBanner style={{ minWidth: "100vw", minHeight: "100vh" }}>
        <ParallaxBannerLayer speed={-50}>
          <img src={image} alt="background" loading="lazy" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer>
          <HomeContent />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </Page>
  );
};

const HomeContent = () => {
  return <SectionHeader>{HOME_CONSTANTS.HEADER}</SectionHeader>;
};

export default HomeSection;
