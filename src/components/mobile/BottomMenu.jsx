import React from "react";
import home from "../../assets/img/home.png";
import slot from "../../assets/img/slot.svg";
import fish from "../../assets/img/fish.svg";
import card from "../../assets/img/card.svg";
import football from "../../assets/img/sport.svg";
import "../../assets/css/footer.css";
import lotto from "../../assets/img/lotto.svg";

import { Link, useSearchParams } from "react-router-dom";

const BottomMenu = () => {
  const [searchParams] = useSearchParams();
  const items = [
    { img: home, link: "/", value: null },
    { img: slot, link: "?type=slot&&list=JILI", value: "slot" },
    { img: fish, link: "?type=fishing&&list=JILI", value: "fishing" },
    { img: card, link: "?type=live casino&&list=JILI", value: "live casino" },
    { img: football, link: "?type=sport book&&list=SBO", value: "sport book" },
    { img: lotto, link: "/2d", value: "2d" },
    { img: lotto, link: "/3d", value: "3d" },
  ];
  return (
    <div className="bottomMenu">
      <div className="">
      <div className="d-flex justify-content-between bottomMenu ">
          {items.map((item, index) => {
            return (
              <div key={index} className={`${
                searchParams.get("type") === item.value
                  ? "  activeFixedBottomIcon"
                  : " "
                }  px-1 py-3 text-center`}>
                <Link
                  
                  to={
                    item.value==='2d' || item.value==='3d' ? 
                    item.link
                    :item.link==='/' ? '/' :
                    window.location.pathname==='/demo-play' ? window.location.pathname+item.link : '/games'+item.link
                  }
                  
                >
                  <img src={item.img} className={`fixedBottomIcon ${index===0 ? 'normalColor' :''}`} />
                </Link>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
