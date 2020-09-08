import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles, {
  MoveCenter,
  Khand,
  font,
  theme,
} from "../../../../../Styles/GlobalStyles";
function LeftSection({ text }) {
  const contents = text.description;
  const descriptionArr = contents?.split("', '");
  const TitleArr =
    descriptionArr && descriptionArr[0].includes("Also available")
      ? descriptionArr?.slice(2)
      : descriptionArr?.slice(1);

  return (
    <Container>
      <TitleContent>
        <TitleContentBox>
          <Title>{text.name}</Title>
          <Sub>{text.sub_name}</Sub>
          <Sub>
            for <Link to="#">{text.editor}</Link>
          </Sub>
        </TitleContentBox>
      </TitleContent>
      <DescriptionTitle>
        {descriptionArr && descriptionArr[0].includes("Also available")
          ? descriptionArr && descriptionArr[0].substring(1)
          : ""}
      </DescriptionTitle>
      <DescriptionSubTitle>
        <br />
        {descriptionArr && descriptionArr[0].includes("Also available")
          ? descriptionArr && descriptionArr[1]
          : descriptionArr && descriptionArr[0].substring(1)}
      </DescriptionSubTitle>

      {TitleArr?.map((v) => {
        return <DescriptionMainText key={v}>{v}</DescriptionMainText>;
      })}
      <DescriptionTitle>
        <br /> &nbsp;
      </DescriptionTitle>
      <Video
        video={text.video_url}
        show={text.video_url === "" ? true : false}
      />
      <GetItemInfo>Here's what you get:</GetItemInfo>
      <ListItem>
        {text.item?.map((v) => {
          return <ListItemDescription key={v}>{v}</ListItemDescription>;
        })}
      </ListItem>
      <ContainerP>&nbsp;</ContainerP>
      <Texture show={text.gif_image === "" ? true : false}>
        Preview every brush here:
        <TextureImg img={text.gif_image}></TextureImg>
      </Texture>
      <Texture>Key features:</Texture>
      <ListItem>
        {text.feature &&
          text.feature.map((v) => {
            return <ListItemDescription key={v}>{v}</ListItemDescription>;
          })}
      </ListItem>
      <ContainerP>&nbsp;</ContainerP>
      <SummaryItem>
        <br />
        <FullImg img={text.description_image} />
        <div>
          Get up to speed fast with comprehensive user guides and brushstroke
          preview included
        </div>
      </SummaryItem>
      <ContainerP>&nbsp;</ContainerP>
      <DescriptionTitle>
        <Guarantee />
        <br />
        You're covered with our <br />
        Dig It Or It's Free Guarantee.
      </DescriptionTitle>
      <FullDetail>
        <Link to="#">Full details here.</Link>
      </FullDetail>
      <ContainerP>&nbsp;</ContainerP>
      <ContainerP>&nbsp;</ContainerP>
      <ContainerP>&nbsp;</ContainerP>
    </Container>
  );
}

export default LeftSection;

const Container = styled.section`
  width: 60%;
  margin-right: 30px;
  padding: 0 30px;
  background-color: ${theme.lightBeige};
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  height: 173px;
  width: 100%;
  border-top: 1px solid ${theme.mediumGrey};
  border-bottom: 1px solid ${theme.mediumGrey};
`;

const TitleContentBox = styled.div`
  height: 102px;
  background-color: ${theme.lightBeige};
`;

const Title = styled.h1`
  height: 33px;
  margin-bottom: 13px;
  ${font("Spartan", 27.64)}
  font-size: 27.64px;
`;

const Sub = styled.div`
  letter-spacing: 0.8px;
  ${font("Inconsolata", 18)}
  line-height: 28px;
`;

const DescriptionTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 15px;
  line-height: 24px;
  ${font("Inconsolata", 18)}
`;

const DescriptionSubTitle = styled.h2`
  line-height: 30px;
  margin-top: 30px;
  margin-bottom: 15px;
  ${font("Spartan", 24, 600)}
`;

const DescriptionMainText = styled.p`
  font-size: 17px;
  line-height: 29px;
  letter-spacing: 0px;
  margin-bottom: 22px;
`;

const Video = styled.iframe.attrs((props) => ({
  src: props.video || "",
}))`
  width: 100%;
  height: 453.16px;
  display: ${(props) => (props.show ? "none" : "block")};
`;

const GetItemInfo = styled.h3`
  height: 56px;
  line-height: 84px;
  margin-top: 30px;
  margin-bottom: 15px;
  ${font("Spartan", 20)}
`;

const ListItem = styled.ul`
  margin-left: 25px;
  margin-bottom: 12.5px;
`;

const ListItemDescription = styled.li`
  padding-left: 15px;
  margin-bottom: 4px;
  ${font("Inconsolata", 16)}
  &::before {
    content: "✓";
    position: relative;
    left: -5.8%;
  }
`;

const ContainerP = styled.p`
  width: 100%;
  margin-bottom: 22px;
`;

const Texture = styled.h3`
  font-size: 20px;
  line-height: 28px;
  margin-top: 30px;
  margin-bottom: 15px;
  display: ${(props) => (props.show ? "none" : "block")};
`;

const TextureImg = styled.img.attrs((props) => ({
  src: props.img || "",
}))`
  width: 100%;
  height: 142px;
`;

const SummaryItem = styled.p`
  margin-bottom: 22px;
`;

const FullImg = styled.img.attrs((props) => ({
  src: props.img || "",
}))`
  max-width: 100%;
  height: auto;
`;

const Guarantee = styled.img.attrs((props) => ({
  src:
    props.img ||
    "https://cdn.shopify.com/s/files/1/0989/0116/files/Guarantee-Rounded-333-500px-24_compact.png?v=1549058426",
}))`
  width: 160px;
  height: 160px;
`;

const FullDetail = styled.h5`
  height: 15px;
  margin-top: 30px;
  margin-bottom: 15px;
`;
