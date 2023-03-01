import React, { useState } from "react";
import Footer from "../footer/footer";
import "./body.css";
import Cards from "./Cards";
import "./style.css";
import React, { useState, useEffect } from "react";
import Shimmer from "../../Shimmer";

const Body = () => {
  const [fdata, setFdata] = useState([]);
  // console.log(fdata);

  const [copydata, setCopyData] = useState([]);

  // console.log(copydata);

  const [isLoading, setIsLoading] = useState(true);

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata === "") {
      setCopyData(fdata);
    } else {
      let storedata = fdata.filter((ele, k) => {
        return ele.data.name.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
      fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING`)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        // console.log(res?.data?.cards[2]?.data?.data?.cards)
        // localStorage.setItem("mydata",res?.data?.cards[2]?.data?.data?.cards )
        setFdata(res?.data?.cards[2]?.data?.data?.cards);
        setCopyData(res?.data?.cards[2]?.data?.data?.cards);
        setIsLoading(false);

      });
    })
   
  }, []);

  return (
    <>
    {
      isLoading
      ?
    //   <div>
    //   {[...Array(5)].map((e,i) => (
    //     <Shimmer key={i} />
    //   ))}
    // </div>:

  <>
  <Shimmer/>
  </>:
      <div>
      <div className="search-bar">
        <div className="header-searchBar">
          <input
            className="search-input"
            onChange={(e) => chanegData(e.target.value)}
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <div>
            <button className="btn-hovercolor-6">Search</button>
          </div>
        </div>
      </div>

      <div className="resturent_title">
        <h2 style={{ fontWeight: 400}}>Restaurants in Vijayawada Open now</h2>
      </div>
      <div className="iteam_section">
        <div className="row_card">
          {/* <Cards data={fdata} /> */}
          {copydata && copydata.length ? (
            <Cards data={copydata} />
          ) : (
            "No Data Available"
          )}
        </div>
      </div>

      <Footer />
      </div>
      
    }

    </>
  );
};

export default Body;



//create routes error page