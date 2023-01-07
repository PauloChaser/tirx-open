import React from "react";

export const ButtonDouble = ({ className }) => {
  return (
    <a className={`buttonDouble buttonDouble--fat ${className}`}>
      <span className="buttonDouble__arrowWrapper">
        <svg className="buttonDouble__arrowIcon">
          <use href="./spritemap.svg#icon-buttonDouble-arrow" />
        </svg>
      </span>
      <span className="buttonDouble__text text">Получить консультацию</span>
    </a>
  );
};
