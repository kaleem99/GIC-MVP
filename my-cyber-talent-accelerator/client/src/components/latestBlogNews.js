import React, { useEffect, useState } from "react";

export default function LatestBlogNews() {
    const [state, setState] = useState([]);
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=${new Date().toISOString().slice(0, 10)}&sortBy=publishedAt&apiKey=d83a888e01bc4ee8b877804853dc83d4`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((result) => setState(result.articles))
      .catch((err) => console.log("error"));
  };
  return (
    <div className="blog-container">
      {state.slice(0, 4).map((data, i) => {
          return (
              <div className="blog-item">
                  <img className="w-75" src={data.urlToImage}></img>
                  <p>{data.title}</p>
                  <h4>{data.publishedAt}</h4>
                  <a className="red" href={data.url}>Read More</a>
              </div>
          )
      })}
    </div>
  );
}
