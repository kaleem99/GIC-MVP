import BottomPartOfPage from "../components/footer";
import React, { useState, useEffect } from "react";

export default function StudentGridPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch("http://localhost:5000/getJobs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.data))
      .catch((err) => console.log("error"));
  };
  return (
    <div className=" studentPage w-100">
      <div className="w-100 h4 bg-gray"></div>

      <div className="w-100 center bg-light-gray h-75">
        <div class="flex w-100 h-100 mt3">
          <div class="outline ml3 br3 w-25 h-50 bg-white"></div>
          <div class="outline ml3 br3 w-75 h-100 bg-white"></div>
        </div>
      </div>
      <div className="w-100 h3 bg-gray"></div>
      <BottomPartOfPage />
    </div>
  );
}
