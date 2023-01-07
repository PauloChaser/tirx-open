// import "./Constructor/Constructor.css";
import React, { useState } from "react";
import { Step } from "./Step.jsx";
import { ConstructorCircleButton } from "./ConstructorCircleButton.jsx";
import { Controls } from "./Controls.jsx";
import { ProjectOptions } from "./ProjectOptions.jsx";
import { Area } from "./Area.jsx";

const steps = [
  {
    title: "Количество галерей",
    description: "Выберите количество галерей",
    options: {
      type: "radio",
      items: [
        {
          id: "dsd8d",
          name: "1 галерея",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "1 галерея",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__gallery--1",
        },
        {
          id: "duf8g",
          name: "2 галереи",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "2 галереи",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__gallery--2",
        },
        {
          id: "vv9d9",
          name: "3 галереи",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "3 галереи",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__gallery--3",
        },
      ],
    },
  },
  {
    title: "Фронтальные пулеулавлеватели",
    description: "Выберите фронтальные пулеулавлеватели",
    options: {
      type: "radio",
      items: [
        {
          id: "277r8",
          name: "Жалюзи",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Жалюзи",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__catcher--blinds",
        },
        {
          id: "e88i4",
          name: "Насыпной",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Насыпной",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__catcher--bulk",
        },
        {
          id: "r7ru3",
          name: "Центробежный (улитка)",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Центробежный (улитка)",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__catcher--snail",
        },
      ],
    },
  },
  {
    title: "Антирикошетная защита",
    description: "Выберите антирикошетную защиту",
    photo: "./img/step-image-retina.jpg",
    photoTitle: "Антирикошетная защита",
    photoDescription:
      "Aonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: {
      type: "checkbox",
      items: [
        {
          id: "r43t3",
          name: "Для потолка, для стен, для пола",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Для потолка, для стен, для пола",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__antiRicochet",
        },
      ],
    },
  },
  {
    title: "Мишенные установки",
    description: "Выберите мишенные установки",
    photo: "./img/step-image-retina.jpg",
    photoTitle: "67 галерея",
    photoDescription:
      "Aonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: {
      type: "checkbox",
      items: [
        {
          id: "r38g0",
          name: "Мобильные пулеулавлеватели",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Мобильные пулеулавлеватели",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__target--mobile",
        },
        {
          id: "f0w03",
          name: "Мишени перед фронтальной стеной",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Мишени перед фронтальной стеной",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__target--front",
        },
        {
          id: "ddf0e",
          name: "Монорельс",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Монорельс",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__target--rail",
        },
      ],
    },
  },
  {
    title: "Дизайн",
    description: "Выберите дизайн",
    options: {
      type: "checkbox",
      items: [
        {
          id: "x7s8g",
          name: "Для стен",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "С дизайном",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__design--wall",
        },
        {
          id: "fjj87",
          name: "Для пола",
          photo: "./img/step-image-retina.jpg",
          photoTitle: "Без дизайна",
          photoDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          class: "Area__design--floor",
        },
      ],
    },
  },
];

const options = steps.reduce((acc, step) => {
  return [...acc, ...step.options.items];
}, []);

export const Constructor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState(Array(steps.length).fill([]));

  const classes = options.reduce((acc, option) => {
    if (results.flat().includes(option.name)) {
      acc.push(option.class);
    }

    return acc;
  }, []);

  return (
    <section className="Constructor">
      <div className="Constructor__wrapper">
        {currentStep < 5 ? (
          <>
            <div className="Constructor__top">
              <div className="Constructor__left">
                <div className="Constructor__steps">
                  <Step
                    className="Constructor__step"
                    step={steps[currentStep]}
                    currentStep={currentStep}
                    setResults={setResults}
                    results={results}
                  />
                </div>
              </div>

              <Area className="Constructor__right" classes={classes}>
                <div className="Constructor__image">
                  <img
                    src="img/constructor-img-bg.jpg"
                    className="Constructor__imageBg"
                  />
                </div>
              </Area>

              {/*<ConstructorCircleButton className="Constructor__openInfo" />*/}
            </div>

            <Controls
              className="Constructor__bottom"
              currentStep={currentStep}
              stepDescription={steps[currentStep]?.description}
              onNextStep={() => setCurrentStep(currentStep + 1)}
              onPreviousStep={() =>
                currentStep === 0 ? undefined : setCurrentStep(currentStep - 1)
              }
            />
          </>
        ) : (
          <>
            <ProjectOptions
              className="Constructor__projectOptions"
              steps={steps}
              results={results}
              setCurrentStep={setCurrentStep}
            />

            <div className="Constructor__getConsultation getConsultation">
              <h3 className="getConsultation__title">
                Получить <br />
                бесплатную консультацию
              </h3>
              <form action="#" className="getConsultation__form formFree">
                <div className="formFree__inputs formFree__inputs--three">
                  <div className="formFree__inputWrapper">
                    <input
                      type="text"
                      className="InputBorder"
                      id="constructor-name"
                      name="name"
                      placeholder="Имя"
                    />
                    <label htmlFor="constructor-name">Имя</label>
                  </div>
                  <div className="formFree__inputWrapper">
                    <input
                      type="text"
                      className="InputBorder"
                      id="constructor-phone"
                      name="phone"
                      placeholder="Номер телефона"
                    />
                    <label htmlFor="constructor-phone">Номер телефона</label>
                  </div>
                  <div className="formFree__inputWrapper formFree__inputWrapper--fullTab">
                    <input
                      type="text"
                      className="InputBorder"
                      id="constructor-mail"
                      name="mail"
                      placeholder="E-mail"
                    />
                    <label htmlFor="constructor-mail">E-mail</label>
                  </div>
                </div>
                <div className="formFree__inputWrapper formFree__inputWrapper--single">
                  <label htmlFor="constructor-comment"></label>
                  <textarea
                    className="textarea"
                    id="constructor-comment"
                    placeholder="Комментарий"
                  ></textarea>
                </div>
                <div className="formFree__inputs formFree__inputs--withButton">
                  <div className="formFree__button js-submit-button">
                    <a className="buttonDouble buttonDouble--smooth buttonDouble--xxl">
                      <span className="buttonDouble__arrowWrapper">
                        <svg className="buttonDouble__arrowIcon">
                          <use href="./spritemap.svg#icon-buttonDouble-arrow" />
                        </svg>
                      </span>
                      <span className="buttonDouble__text text">
                        Получить консультацию
                      </span>
                    </a>
                  </div>

                  <div className="formFree__checkboxWrapper">
                    <div className="checkbox checkbox--small">
                      <input
                        type="checkbox"
                        className="checkbox__element"
                        id="constructor-checkbox"
                      />
                      <label
                        className="checkbox__label text"
                        htmlFor="constructor-checkbox"
                      >
                        Я соглашаюсь на обработку своих
                        <a href="#" className="checkbox__personalData">
                          персональных данных.
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}

        <div className="Constructor__close">
          <svg className="Constructor__closeIcon">
            <use href="./spritemap.svg#icon-constructor-close" />
          </svg>
        </div>
      </div>
    </section>
  );
};
