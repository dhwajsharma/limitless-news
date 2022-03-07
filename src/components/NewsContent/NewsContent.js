import React from "react";
import "./NewsContent.css";
import Container from "@mui/material/Container";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="newsContent">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="newsContent__loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
