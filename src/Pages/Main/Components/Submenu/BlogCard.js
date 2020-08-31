import React from "react";
import styled from "styled-components";
import { font, theme } from "../../../../Styles/GlobalStyles";

function BlogCard({ post }) {
  if (post) {
    return (
      <BlogCardStyle>
        <BlogCardImg src={post.image} />
        <BlogCardTitle>{post.title}</BlogCardTitle>
        <TextBox>
          <CardText>
            <p>{post.content}</p>
          </CardText>
        </TextBox>
        <ReadBtn>Read More</ReadBtn>
      </BlogCardStyle>
    );
  } else {
    return null;
  }
}

const BlogCardStyle = styled.div`
  width: 31.5%;
`;

const BlogCardTitle = styled.div`
  margin-top: 15px;
  ${font("Spartan", 17, 700)};
  line-height: 1.5;
  color: ${theme.mediumGrey};
`;

const BlogCardImg = styled.img`
  width: 100%;
  height: auto;
`;

const TextBox = styled.div`
  display: flex;
  width: 300px;
  height: 90px;
  margin-top: 10px;
`;

const CardText = styled.p`
  width: 100%;
  ${font("Inconsolata", 14, 300)}
  line-height: 1.5;
  word-spacing: 2px;
  color: ${theme.mediumGrey};
`;

const ReadBtn = styled.span`
  display: inline-block;
  border-bottom: 1px solid ${theme.mediumGrey};
  ${font("Spartan", 10, 700)}
  color: ${theme.mediumGrey};
`;

export default BlogCard;
