import React from "react";
import { ButtonDouble } from "./ButtonDouble.jsx";

export const Controls = ({
  className,
  currentStep,
  stepDescription,
  onPreviousStep,
  onNextStep,
}) => {
  return (
    <div className={`Controls ${className}`}>
      <ButtonDouble className="Controls__help" />

      <div className="Controls__description">
        <span className="Controls__descriptionStep">
          Шаг {currentStep + 1} из 5
        </span>
        <div className="Controls__descriptionText">{stepDescription}</div>
      </div>
      <div className="Controls__nav">
        <div className="Controls__back" onClick={onPreviousStep}>
          <svg className="Controls__backIcon">
            <use href="./spritemap.svg#icon-arrow-back" />
          </svg>
        </div>
        <div className="Controls__next" onClick={onNextStep}>
          <span className="Controls__nextText">Дальше</span>
        </div>
      </div>
    </div>
  );
};
