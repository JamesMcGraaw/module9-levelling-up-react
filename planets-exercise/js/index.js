"use strict";
const submitButton = document.querySelector('button');
// const submittedAge: string | null = document.querySelector('input').value
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
    console.log("pressed submit");
    // textToEdit.innerHTML =
    // "On Mercury you are " + (Number(submittedAge)* mercury)
    "On Venus you are " +
        "On Mars you are " +
        "On Jupiter you are " +
        "On Saturn you are " +
        "On Uranus you are " +
        "On Neptune you are ";
};
// if (button) {
// submitButton.addEventListener('submit', handleSubmit)
// }
