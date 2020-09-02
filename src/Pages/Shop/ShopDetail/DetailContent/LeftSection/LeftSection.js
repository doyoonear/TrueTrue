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
  return (
    <Container>
      <TitleContent>
        <TitleContentBox>
          <Title>The Rusty Nib for Photoshop</Title>
          <Sub>Distressed Inking Brushes</Sub>
          <Sub>
            for <Link to="#">Photoshop</Link>
          </Sub>
        </TitleContentBox>
      </TitleContent>
      <DescriptionTitle>
        Also available for Procreate & Affinity.
      </DescriptionTitle>
      <DescriptionSubTitle>
        <br />
        Draw til yer dead with over 130 pro-quality distressed inking brushes
        for Photoshop, from rough and gritty to smooth and delicate and
        everything between.
      </DescriptionSubTitle>
      <DescriptionMainText>
        Each brush is built from scratch using original analog brush and texture
        samples to create a diverse and powerful set of tools that combine the
        tactile beauty of ink on paper with the convenience of a modern digital
        workflow.
      </DescriptionMainText>
      <DescriptionMainText>
        With a huge range of authentic stroke styles, textures, edge effects,
        poses, and brush feels The Rusty Nib Brush Set is as realistic as it is
        diverse. We've got you covered whether you're re-creating the gritty
        aesthetic of scanned print ephemera or aiming for the subtlety of real
        india ink flowing onto the page.
      </DescriptionMainText>
      <DescriptionTitle>
        <br /> &nbsp;
      </DescriptionTitle>
      <Video />
      <GetItemInfo>Here's what you get:</GetItemInfo>
      <ListItem>
        {text.get &&
          text.get.map((v) => {
            return <ListItemDescription key={v}>{v}</ListItemDescription>;
          })}
      </ListItem>
      <ContainerP>&nbsp;</ContainerP>
      <Texture>
        Preview every brush here:
        <TextureImg></TextureImg>
      </Texture>
      <Texture>Key features:</Texture>
      <ListItem>
        {text.keyFeature &&
          text.keyFeature.map((v) => {
            return <ListItemDescription key={v}>{v}</ListItemDescription>;
          })}
      </ListItem>
      <ContainerP>&nbsp;</ContainerP>
      <SummaryItem>
        <br />
        <FullImg />
        <small>
          Get up to speed fast with comprehensive user guides and brushstroke
          preview included
        </small>
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
  height: 150px;
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
  src:
    props.video ||
    "https://player.vimeo.com/video/352387513?color=bf914c&title=0&byline=0&portrait=0",
}))`
  width: 100%;
  height: 453.16px;
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
    left: -13%;
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
`;

const TextureImg = styled.img.attrs((props) => ({
  src:
    props.img ||
    "https://cdn.shopify.com/s/files/1/0989/0116/files/Rusty-Nib-Stroke-GIF-Edited-700px-32col_1024x1024.gif?v=1564441494",
}))`
  width: 100%;
  height: 142px;
`;

const SummaryItem = styled.p`
  margin-bottom: 22px;
`;

const FullImg = styled.img.attrs((props) => ({
  src:
    props.img ||
    "https://cdn.shopify.com/s/files/1/0989/0116/files/The-Rusty-Nib-InstallGuide-Combined_f55735f9-de96-4061-9745-beda7132cefc_1024x1024.png?v=1564430367",
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
