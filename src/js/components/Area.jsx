import React from "react";

export const Area = ({ className, classes, children }) => {
  const activeClasses = classes.map((className) => `.${className}`).join(", ");
  const style = `${activeClasses} {opacity: 1}`;

  return (
    <>
      <style>{style}</style>
      <div className={`Area ${className}`}>
        <div className="Area__gallery Area__gallery--1">111111</div>
        <div className="Area__gallery Area__gallery--2">222222</div>
        <div className="Area__gallery Area__gallery--3">333333</div>

        <div className="Area__catcher Area__catcher--blinds">Жалюзи</div>
        <div className="Area__catcher Area__catcher--bulk">Насыпной</div>
        <div className="Area__catcher Area__catcher--snail">Улитка</div>

        <div className="Area__antiRicochet">Антирикошетная защита</div>

        <div className="Area__target Area__target--mobile">
          Мишень мобильная
        </div>
        <div className="Area__target Area__target--front">
          Мишень фронтальная
        </div>
        <div className="Area__target Area__target--rail">Мишень монорель</div>

        <div className="Area__design Area__design--wall">
          <div className="Area__designWall"></div>
        </div>
        <div className="Area__design Area__design--floor">
          <div className="Area__designFloor"></div>
        </div>
        {children}
      </div>
    </>
  );
};
