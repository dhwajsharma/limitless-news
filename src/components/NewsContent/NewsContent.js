import React from "react";
import "./NewsContent.css";
import Container from "@mui/material/Container";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="newsContent">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
    </Container>
  );
};

export default NewsContent;
