import BottomPartOfPage from "../components/footer";
import React, { useState, useEffect } from "react";
import BusinessCard from "../components/BusinessCard";
import { configuration } from "../configuration";
export default function BusinessGridPage() {
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    FetchGetRequest();
  }, []);
  const FetchGetRequest = () => {
    fetch(`http://localhost:${configuration.port}/Business-GridPage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result.businessData))
      .catch((err) => console.log("error"));
  };
  const filterCompanies = (event) => {
    let result = event.target.value;
    const newData = data.filter((val) => {
        console.log(result === val.companyname)
      return val.companyname === result;
    });
    setData(newData);
  };
  return (
    <div className=" studentPage w-100">
      <div className="w-100 h4 bg-gray">
        <h2 className="tc white pt4">List Of All Companies</h2>
      </div>

      <div className="w-100 center bg-light-gray h-75">
        <div class="flex w-100 h-100 mt3">
          <div class="outline ml3 br3 w-25 h-50 bg-white tc">
            <h2>Filter Businesses</h2>
            Company/Business Name:
            <input className="w-75 h2" onChange={filterCompanies}></input>
          </div>
          <div class="grid outline ml3 br3 w-70 h-100 bg-wite pa5">
            <div class="grid-container">
              {data.map((res, i) => {
                return (
                  <BusinessCard
                    i={res.id}
                    name={res.companyname}
                    industry={res.industry}
                    location={res.location}
                    description={res.aboutcompany}
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
