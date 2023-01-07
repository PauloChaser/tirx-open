// import "./Constructor/Constructor.css";
import React, { useCallback } from "react";

export const Step = ({ className, step, currentStep, setResults, results }) => {
  const { title, options } = step;

  const handleRadioSelect = (value) => {
    setResults((prevResult) => {
      const newValue = [...prevResult];

      newValue[currentStep] = [value];

      return newValue;
    });
  };

  const handleCheckboxSelect = useCallback(
    (value) => {
      setResults((prevResult) => {
        const newValue = prevResult.map((a) => [...a]);

        if (prevResult[currentStep].includes(value)) {
          newValue[currentStep] = newValue[currentStep].filter(
            (item) => item !== value
          );
        } else {
          newValue[currentStep].push(value);
        }

        return newValue;
      });
    },
    [setResults, currentStep]
  );

  const selectedStepInfo = options.items.find((option) =>
    results[currentStep].includes(option.name)
  );

  return (
    <div className={`Step ${className}`}>
      <div className="Step__panel">
        <div className="Step__counter">Шаг {currentStep + 1}</div>
        <div className="Step__title">{title}</div>

        <div className="Step__options">
          <div className="Step__inputs">
            {options.type === "radio" &&
              options.items.map((item, index) => {
                return (
                  <div className="Step__inputsItemWrapper" key={index}>
                    <input
                      className="radio"
                      name={`step-${index}`}
                      type="radio"
                      id={`option-${index}`}
                      value={item.name}
                      checked={Boolean(
                        results[currentStep]?.includes(item.name)
                      )}
                      onChange={() => handleRadioSelect(item.name)}
                    />
                    <label htmlFor={`option-${index}`}>{item.name}</label>
                  </div>
                );
              })}

            {options.type === "checkbox" &&
              options.items.map((item, index) => (
                <div className="Step__inputsItemWrapper" key={index}>
                  <input
                    type="checkbox"
                    className="checkboxMark"
                    name={`step-${index}`}
                    id={`checkbox-${index}`}
                    value={item.name}
                    checked={Boolean(results[currentStep]?.includes(item.name))}
                    onChange={() => handleCheckboxSelect(item.name)}
                  />
                  <label htmlFor={`checkbox-${index}`}>{item.name}</label>
                </div>
              ))}
          </div>
        </div>
      </div>
      {selectedStepInfo && (
        <div className="Step__info">
          <div className="Step__text">
            <div className="Step__textTitle">{selectedStepInfo.photoTitle}</div>
            <div className="Step__textDescription">
              {selectedStepInfo.photoDescription}
            </div>
          </div>
          <div className="Step__image">
            <img src={selectedStepInfo.photo} className="Step__imageItem" />
          </div>
          <div className="Step__infoClose">
            <svg className="Step__infoCloseIcon">
              <use href="./spritemap.svg#icon-close" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
