import React, { useState, useEffect } from "react";

export default function GetAndDisplayJobPosts() {
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
  return data.map((val) => {
    return (
      <div className="bg-white tc w-75 center h3 ma3 br3">
        <table className="table br3 ma1">
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Salary</th>
            <th>City</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>{val.title}</td>
            <td>{val.company}</td>
            <td>{val.salary}</td>
            <td>{val.city}</td>
            <td>{val.description}</td>
            <td><button className="w4 h2 br2 bg-red" onClick={() => window.location.href=`/View-Business-Profile:${val.id}`}>View Details</button></td>
          </tr>
        </table>
      </div>
    );
  });
}
