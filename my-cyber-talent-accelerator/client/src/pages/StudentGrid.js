import BottomPartOfPage from "../components/footer";
import React, { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";
import { configuration } from "../configuration";
export default function StudentGridPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch(`http://localhost:${configuration.port}/Student-grid`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.studentData))
      .catch((err) => console.log("error"));
  };
  console.log(data)
  return (
    <div className=" studentPage w-100">
      <div className="w-100 h4 bg-gray"></div>

      <div className="w-100 center bg-light-gray h-75">
        <div class="flex w-100 h-100 mt3">
          <div class="outline ml3 br3 w-25 h-50 bg-white"></div>
          <div class="grid outline ml3 br3 w-70 h-100 bg-wite pa5">
            <div class="grid-container">
              {data.map((res, i) => {
                return (
                  <StudentCard
                    name={res.name}
                    description={res.description}
                    skills={[res.skill1, res.skill2, res.skills3]}
                    i={res.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h3 bg-gray"></div>
      <BottomPartOfPage />
    </div>
  );
}
