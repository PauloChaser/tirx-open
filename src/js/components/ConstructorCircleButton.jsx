// import "./Constructor/Constructor.css";
import React from "react";

export const ConstructorCircleButton = ({ className }) => {
  return (
    <div className={`ConstructorCircleButton ${className}`}>
      <div className="ConstructorCircleButton__iconWrapper">
        <div className="ConstructorCircleButton__icon"></div>
      </div>
      <div className="ConstructorCircleButton__popUp">
        <div className="ConstructorCircleButton__popUpInner">
          <div className="ConstructorCircleButton__popUpTitle">
            Антирикошетная защита для пола
          </div>
          <div className="ConstructorCircleButton__popUpText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud "Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="ConstructorCircleButton__popUpClose">
          <svg className="ConstructorCircleButton__popUpCloseIcon">
            <use href="./spritemap.svg#icon-close" />
          </svg>
        </div>
      </div>
    </div>
  );
};
