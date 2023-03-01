import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import path from "path";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  // const[data, setData]= useState([])

  const cardclickhandler = (id) => {
    navigate({ pathname: `/productdetails/${id}` });
  };

  return (
    <>
      {data.map((element, k) => {
        // console.log(element.data.id)
        return (
          <>
            <Card
              style={{ width: "25rem", border: "none" }}
              className="hove"
              onClick={() => {
                cardclickhandler(element.data.id);
              }}
            >
              <Card.Img
                variant="top"
                className="cd"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${element.data.cloudinaryImageId}`}
              />

              <div className="card_body">
                <div className="upper_data">
                  <h4 className="resturent_name">{element.data.name}</h4>
                  <span>{element.data.totalRatingsString}</span>
                </div>

                <div className="lower_data">
                  <h5>{element.data.cuisines}</h5>
                  {/* <span>{element.price}</span> */}
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
