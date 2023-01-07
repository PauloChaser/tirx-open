import Validator from "./classes/Validator";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const sendButtons = document.querySelectorAll(".js-submit-button") || [];
const forms = document.querySelectorAll(".js-form") || [];

export function initForm() {
  inputSelect();

  sendButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const form = event.target.closest("form");

      if (!form) {
        return;
      }

      handleFormSubmit(undefined, form);
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => handleFormSubmit(e, form));
  });
}

function handleFormSubmit(e, form) {
  e && e.preventDefault();

  const validator = new Validator(form);
  const fd = new FormData(form);
  const url = form.getAttribute("action");
  const submit = form.querySelector(".js-submit-button");
  const isFormValid = validator.validate();

  if (!url || !isFormValid) {
    return;
  }

  fetch(url, {
    method: "POST",
    body: fd,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success && submit) {
        submit.value = "Отправлено";
        submit.setAttribute("disabled", "disabled");
      }
    });
}

function inputSelect() {
  const selects = document.querySelectorAll(".js-select");

  if (!selects) {
    return;
  }

  selects.forEach(function (select) {
    const selectOptions = select.querySelector(".js-select-options");
    const selectedValue = select.querySelector(".js-selected-value");

    select.addEventListener("click", function () {
      select.classList.toggle("select--active");
    });

    selectOptions.addEventListener("click", function (event) {
      const target = event.target;
      const option = target.closest(".select__option");
      const optionValue = option.innerText;
      const selectReal = select.parentElement.querySelector("select");
      const optionsReal = [...selectReal.options];

      if (!option) {
        return;
      }

      optionsReal.forEach(function (optionReal, i) {
        if (optionReal.innerText.trim() === optionValue.trim()) {
          optionReal.setAttribute("selected", true);
          selectedValue.innerText = optionReal.innerText;
        } else {
          optionReal.removeAttribute("selected");
        }
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".js-select")) {
      selects.forEach(function (select) {
        select.classList.remove("select--active");
      });
    }
  });
}
