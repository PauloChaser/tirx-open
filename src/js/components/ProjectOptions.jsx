import React from "react";
import { ProjectOption } from "./ProjectOption.jsx";

export const ProjectOptions = ({
  className,
  steps,
  results,
  setCurrentStep,
}) => {
  return (
    <div className={`ProjectOptions ${className}`}>
      <h3 className="ProjectOptions__title">
        Параметры <br />
        вашего проекта
      </h3>
      <div className="ProjectOptions__items">
        {steps.map((step, index) => (
          <ProjectOption
            key={index}
            className="ProjectOptions__item"
            index={index}
            title={step.title}
            description={
              step.options.items.find((a) => a.name === results[index][0])
                ?.photoDescription
            }
            image={
              step.options.items.find((a) => a.name === results[index][0])
                ?.photo
            }
            imageRetina={
              step.options.items.find((a) => a.name === results[index][0])
                ?.photo
            }
            selected={results[index]}
            setCurrentStep={setCurrentStep}
          />
        ))}
      </div>
    </div>
  );
};
