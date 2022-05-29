import { userInformation } from "../constants/usersData";
import "../App.css";
import React, { useState, useEffect } from "react";
import DisplayUserCard from "../components/MapCard";
import { companiesData } from "../constants/companies";
import BottomPartOfPage from "../components/footer";
import DisplayTrendingCertifications from "../components/TrendingCertifications";
import GetAndDisplayJobPosts from "../components/DisplayJobPosts";
import LatestBlogNews from "../components/latestBlogNews"
const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []);

  return (
    <div className="tc w-100 h-100">
      {/* <h3>Cyber Security Talent Page</h3> */}
      {/* <p>{!data ? "Loading..." : JSON.stringify(data)}</p> */}
      <br></br>
      <div className="w-100 h-25 tc bg-navy shadow-5 pa3 br2">
        {/* <DisplayUserCard cardData={userInformation} /> */}
        <h2 className="white mt6">Trending Certifications</h2>
      </div>
      <div className="w-100 h-50 bg-white br2 shadow-3">
        <br></br>
        <br></br>
        <DisplayTrendingCertifications />
      </div>
      <br></br>
      <div className="h-75 w-100 br2 bg-light-red">
        <h2>Our Latest Job Postings</h2>
        <br></br>
        <GetAndDisplayJobPosts />
      </div>
      <br></br>
      <div className="w-100 h-25 bg-light-gray br2">
        <h2>About Us</h2>
      </div>
      <br></br>
      <div className="w-100 h-50 bg-gray br2">
        <h2>Featured Talent Postings</h2>
      </div>
      <br></br>
      <div className="w-100 h-50 bg-light-gray br2">
        <h2>Latest Blog News</h2>
        <LatestBlogNews/>
      </div>
      <div className="w-100 h4 bg-gray br3"></div>
      <BottomPartOfPage />
    </div>
  );
};

export default HomePage;
