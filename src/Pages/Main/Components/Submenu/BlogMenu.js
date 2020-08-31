import React from "react";
import BlogMenuBar from "./BlogMenuBar";
import BlogCard from "./BlogCard";
import styled from "styled-components";
import { theme } from "../../../../Styles/GlobalStyles";

function BlogMenu({ blog }) {
  return (
    <BlogMenuContainer>
      <BlogMenuBar blog={blog} />
      <BlogCardBox>
        {blog &&
          blog.list.map((el, idx) => {
            return <BlogCard key={idx} post={el} />;
          })}
      </BlogCardBox>
    </BlogMenuContainer>
  );
}

const BlogMenuContainer = styled.div`
  height: 700px;
  padding: 60px 62px 30px 62px;
  background-color: ${theme.lightBeige};
`;

const BlogCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30%;
`;

export default BlogMenu;
