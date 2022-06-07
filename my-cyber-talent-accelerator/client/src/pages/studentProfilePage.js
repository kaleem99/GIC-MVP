import React, { useEffect, useState } from "react";
import { configuration } from "../configuration";
export default function StudentProfileView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const id = window.location.href.split(":")[3];
  const FetchGetRequest = () => {
    fetch(`http://localhost:${configuration.port}/View-StudentProfile:id`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.studentData[id-1]))
      .catch((err) => console.log("error"));
  };
  //   console.log(data)
  return (
    <div className="bg-white w-100 h-100">
      <br></br>
      <div className="bg-light-gray h10 w-90 ma2 center">
        <div className="grid-container1">
          <div className="grid-item1">
            <img
              className="w5 h4"
              src="https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=20&m=1033334196&s=170667a&w=0&h=z_ScYNeV7wCaID9R53k4NmufO9f1e14WRyziDOaY2mE="
            ></img>
          </div>
          <div className="grid-item1 w5 pa2">
            <h3>{data.universityname}</h3>
            <h2>{data.profilename}</h2>
            <p>{data.yourlocation}</p>
            <p>{data.membersince}</p>

          </div>
          <div className="grid-item1 w4">
              <button className="bg-red w4 h3"> Hire Now </button>
          </div>
        </div>
      </div>
      <div className="w-50 h-25 bg-gray ma3"></div>
    </div>
  );
}
