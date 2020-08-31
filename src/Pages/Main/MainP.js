import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import MainIcon from "./Components/MainIcon";
import ProductCard from "../../Components/ProductCard/ProductCard";
import BundleMenu from "./Components/Submenu/BundleMenu";
import BlogMenu from "./Components/Submenu/BlogMenu";
import Slider from "./Components/Slider";
import Border from "./Border";
import { font, theme } from "../../Styles/GlobalStyles";

const sponsorLogos = [
  "/Images/footer_images/footer_logo1.webp",
  "/Images/footer_images/footer_logo2.webp",
  "/Images/footer_images/footer_logo3.webp",
  "/Images/footer_images/footer_logo4.webp",
  "/Images/footer_images/footer_logo5.webp",
  "/Images/footer_images/footer_logo6.webp",
  "/Images/footer_images/footer_logo7.webp",
  "/Images/footer_images/footer_logo8.webp",
  "/Images/footer_images/footer_logo9.webp",
  "/Images/footer_images/footer_logo10.webp",
];

function MainP() {
  const [mainImgText, setMainImgText] = useState([]);
  const [productData, setProductData] = useState([]);
  const [offset, setOffset] = useState(0);

  const LIMIT = 8;

  const loadMore = () => {
    setOffset(offset + 1);
  };

  useEffect(() => {
    fetch(
      `http://192.168.200.198:8000/product/products?category=PhotoShop&limit=${LIMIT}&offset=${
        offset * LIMIT
      }`
    )
      .then((res) => res.json())
      .then((res) => setProductData(res.data));
  }, [offset]);

  /* main local fetch */
  useEffect(() => {
    fetch("/Data/mainData.json")
      .then((res) => res.json())
      .then((res) => setMainImgText(res));
  }, []);

  return (
    <>
      <Nav />
      <MainWhole>
        <Border />
        <VideoType src="/Images/main_images/video_type.webp" />
        <MainVideo>
          <video autoPlay loop muted>
            <source src="/Images/main_images/main_video.mp4" type="video/mp4" />
          </video>
        </MainVideo>
        <MainTitle>
          <h1>MUST-HAVE TEXTURE TOOLS</h1>
        </MainTitle>
        <ShopCardBox>
          <ProductCard productData={productData} />
        </ShopCardBox>
        <MainText>
          <LoadBtn onClick={loadMore}>LOAD MORE</LoadBtn>
          <Text>or</Text>
          <h3>BROWSE BY COLLECTION</h3>
        </MainText>
        <IconsBox>
          {mainImgText.icons &&
            mainImgText.icons.map((el, idx) => (
              <MainIcon key={idx} iconsData={el} />
            ))}
        </IconsBox>
        <BundleMenu bundle={mainImgText.bundle} />
        <SliderSection>
          <SliderTitle>
            <h1>GET INSPIRED</h1>
          </SliderTitle>
          <SliderType src="https://cdn.shopify.com/s/files/1/0989/0116/files/CUSTOMER_GALLERY_HEADER_2x_fa1b1850-5d38-4ea0-948a-7971e3d40f8b.png?v=1548169358" />
          <Slider />
          <GalleryBtn>VIEW GALLERY</GalleryBtn>
        </SliderSection>
        <BlogMenu blog={mainImgText.blog} />
        <Sponsor>
          <SponsorTitle>
            <h1>USED AND ABUSED BY CREATIVES AT:</h1>
          </SponsorTitle>
          <SponsorImgBox>
            {sponsorLogos.map((el, idx) => (
              <SponsorImg key={idx} src={el} />
            ))}
          </SponsorImgBox>
        </Sponsor>
      </MainWhole>
    </>
  );
}

const MainWhole = styled.div`
  width: 100%;
  background-color: ${theme.lightBeige};
`;

const VideoType = styled.img`
  position: absolute;
  top: 34%;
  left: 33%;
  z-index: 70;
  width: 40vw;
  height: auto;
`;

const MainVideo = styled.div`
  width: 100%;
  height: 730px;
  margin-top: 30px;
  overflow: hidden;

  video {
    width: 100%;
    height: auto;
    object-position: 10% 100px;
    z-index: 1;
  }
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;

  h1 {
    ${font("Pathway Gothic One", 25, 500)}
    border-top: 1px solid ${theme.mediumGrey};
    border-bottom: 1px solid ${theme.mediumGrey};
    color: ${theme.mediumGrey};
  }
`;

const ShopCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${theme.lightBeige};
  height: 700px;
`;

const ShopCard = styled.div`
  img {
    width: 300px;
    height: auto;
    z-index: 1;
  }

  h3 {
    color: ${theme.mediumGrey};
    ${font("Spartan", 13, 700)}
  }

  p {
    color: ${theme.mediumGrey};
    ${font("Inconsolata", 13, 300)}
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  margin: 70px 0;

  h3 {
    color: ${theme.mediumGrey};
    ${font("Pathway Gothic One", 32, 500)}
  }
`;

const Text = styled.div`
  margin-bottom: 20px;
  ${font("Spartan", 15, 600)}
`;

const LoadBtn = styled.button`
  width: 170px;
  height: 35px;
  margin-bottom: 25px;
  border: 1px solid ${theme.mediumGrey};
  color: ${theme.mediumGrey};
  ${font("Spartan", 12, 700)}
  letter-spacing: 1px;
  line-height: 35px;

  &:hover {
    transition: color 1s;
    transition: background-color 1s;
    color: white;
    background-color: ${theme.mediumGrey};
  }
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${theme.lightBeige};
  padding-bottom: 100px;
`;

const SliderSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderTitle = styled(MainTitle)`
  padding-top: 70px;
  padding-bottom: 50px;
`;

const SliderType = styled.img`
  position: absolute;
  top: 33%;
  left: 25%;
  width: 50%;
  z-index: 50;
`;

const GalleryBtn = styled(LoadBtn)`
  margin: 70px 0;

  &:hover {
    transition: color 1s;
    transition: background-color 1s;
    color: white;
    background-color: ${theme.mediumGrey};
  }
`;

const SponsorTitle = styled(MainTitle)`
  margin-top: 80px;
  color: ${theme.mediumGrey};
`;

const Sponsor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  background-color: ${theme.darkBeige};
`;

const SponsorImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

const SponsorImg = styled.img`
  width: 60px;
  height: auto;
`;

export default MainP;
