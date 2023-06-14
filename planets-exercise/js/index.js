"use strict";
const submitButton = document.querySelector('form');
const textToEdit = document.querySelector('.answers');
const mercury = 0.2408467;
const venus = 0.61519726;
const mars = 1.8808158;
const jupiter = 11.862615;
const saturn = 29.447498;
const uranus = 84.016846;
const neptune = 164.79132;
const handleSubmit = (e) => {
    e.preventDefault();
    const inputBox = document.querySelector('input');
    let submittedAge = '';
    if (inputBox) {
        submittedAge = inputBox.value;
    }
    if (textToEdit) {
        textToEdit.innerHTML =
            "On Mercury you are " + (Number(submittedAge) / mercury) + '<br>' +
                "On Venus you are " + (Number(submittedAge) / venus) + '<br>' +
                "On Mars you are " + (Number(submittedAge) / mars) + '<br>' +
                "On Jupiter you are " + (Number(submittedAge) / jupiter) + '<br>' +
                "On Saturn you are " + (Number(submittedAge) / saturn) + '<br>' +
                "On Uranus you are " + (Number(submittedAge) / uranus) + '<br>' +
                "On Neptune you are " + (Number(submittedAge) / neptune);
    }
};
if (submitButton) {
    submitButton.addEventListener('submit', handleSubmit);
}
