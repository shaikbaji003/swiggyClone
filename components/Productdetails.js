import { keys } from "@mui/system";
import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./body/style.css";

const Productdetails = () => {
  const [pdetails, setPdetails] = useState({});
  const { productId } = useParams();
  const [obj, setObj] = useState({});
  const { name, cuisines, totalRatingsString, costForTwoMsg, city, area } = pdetails;

  // console.log(productId)

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=16.5061743&lng=80.6480153&menuId=${productId}`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        // console.log(res?.data?.cards[2]?.data?.data?.cards)
        // localStorage.setItem("mydata",res?.data?.cards[2]?.data?.data?.cards )
        // setFdata(res?.data?.cards[2]?.data?.data?.cards);
        // setCopyData(res?.data?.cards[2]?.data?.data?.cards);
        setPdetails(res.data);
        setObj(res.data.menu.items);
      });
  }, []);

  console.log(obj);

  return (
    <>
      <div className="product_data">
        <div className="product_banner">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${pdetails.cloudinaryImageId}`}
        />
       </div>
       <div className="product_ids">
       <h2>{name}</h2><br></br>
        <h4>{cuisines}</h4><br></br>
        <h5>{totalRatingsString}</h5><br></br>
        <h5>{costForTwoMsg}</h5><br></br>
        <h5>{city}</h5><br></br>
        <h5>{area}</h5><br></br>
        <br></br>
        </div>
        </div>
        <div className="menu_items">
          <div className="menu_items_title">
          <h5>Menu Items</h5>
          </div>
          {Object.keys(obj).map((key) => {
            return (
              <>
              <div className="menu_data">
                <li>{obj[key].name}</li>
                <p>₹{obj[key].price}</p>
                <div>
                <img className="menu_imagee"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${obj[key].cloudinaryImageId}`}
                />
                </div>
                </div>
              </>
            );
          })}
      

      </div>

    </>
  );
};

export default Productdetails;
