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
        <table className="table br3">
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
          </tr>
        </table>
      </div>
    );
  });
}
