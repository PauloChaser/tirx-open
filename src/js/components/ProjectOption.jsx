import React from "react";

export const ProjectOption = ({
  className,
  index,
  title,
  image,
  imageRetina,
  selected,
  description,
  setCurrentStep,
}) => {
  return (
    <div className={`ProjectOption ${className}`}>
      <h4 className="projectOption__itemHeading">
        <span className="projectOption__itemHeadingNum">{index + 1}</span>
        {title}
      </h4>
      <div className="projectOption__itemBottom">
        <div className="projectOption__itemImgWrapper">
          <img
            src={image}
            srcSet={`${image} 1x, ${imageRetina} 2x`}
            alt={title}
            className="projectOption__itemImg"
          />
        </div>
        <div className="projectOption__itemInfo">
          <div className="projectOption__itemInfoChosen">
            <span className="projectOption__itemInfoChosenHeading">
              Выбрано:
            </span>

            {selected.map((choose, index) => (
              <span
                key={index}
                className={`projectOption__itemInfoChosenPoint`}
              >
                {choose}
              </span>
            ))}
          </div>
          <p className="projectOption__itemInfoText">{description}</p>
          <a
            href="#"
            className="projectOption__itemInfoEdit"
            onClick={() => setCurrentStep(index)}
          >
            Редактировать
          </a>
        </div>
      </div>
    </div>
  );
};
