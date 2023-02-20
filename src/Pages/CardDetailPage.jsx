import React from "react";
import { useSelector } from "react-redux";
import { Image } from "antd";
const CardDetailPage = ({}) => {
  const { card } = useSelector((state) => state.user);
  return (
    <div className="cardDetail">
      <div className="banner">
        <img src={card?.BannerLink} alt="" />
      </div>
      <h2># {card?.name}</h2>
      <p>{card?.description}</p>
      <h4>
        <i class="bx bx-map"></i>
        Start Location:- <span>{card?.startLocation}</span>
      </h4>
      <h4>
        <i class="bx bx-map"></i>
        End Location:- <span>{card?.endLocation}</span>
      </h4>
      <h5>Images of the Cruise</h5>
      <div className="mw">
        {card?.SomeMoreImages.map((d, index) => (
          <Image width={100} height={100} src={d} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardDetailPage;
