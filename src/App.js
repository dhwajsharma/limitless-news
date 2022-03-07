import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
    );
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div className="app">
      <Navbar setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
