const submitButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('button');
// const submittedAge: string | null = document.querySelector('input').value
const textToEdit: HTMLDivElement | null = document.querySelector('.answers')

const mercury: number = 0.2408467;
const venus: number = 0.61519726;
const mars: number = 1.8808158;
const jupiter: number = 11.862615 ;
const saturn: number = 29.447498;
const uranus: number = 84.016846;
const neptune: number = 164.79132;


const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault()
    console.log("pressed submit")
    // textToEdit.innerHTML =
    // "On Mercury you are " + (Number(submittedAge)* mercury)
    "On Venus you are " +
    "On Mars you are " +
    "On Jupiter you are " +
    "On Saturn you are " +
    "On Uranus you are " +
    "On Neptune you are "

}

// if (button) {
    // submitButton.addEventListener('submit', handleSubmit)
// }
