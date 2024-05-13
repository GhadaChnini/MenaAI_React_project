import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from "./imports"


const Blog = () => {
  return (
    <div className="mena__blog section__padding" id="blog">
      <div className="mena__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="mena__blog-container">
        <div className="mena__blog-container_groupA">
          <Article imgUrl={blog01} date="June 30, 2022," title="MenaIA is the future. Let us explore how it is?"/>
        </div>
        <div className="mena__blog-container_groupB">
          <Article imgUrl={blog02} date="June 30, 2022," title="MenaIA is the future. Let us explore how it is?"/>
          <Article imgUrl={blog03} date="June 30, 2022," title="MenaIA is the future. Let us explore how it is?"/>
          <Article imgUrl={blog04} date="June 30, 2022," title="MenaIA is the future. Let us explore how it is?"/>
          <Article imgUrl={blog05} date="June 30, 2022," title="MenaIA is the future. Let us explore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
