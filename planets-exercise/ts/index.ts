const submitButton: HTMLFormElement | null = document.querySelector<HTMLFormElement>('form');
const textToEdit: HTMLDivElement | null = document.querySelector<HTMLDivElement>('.answers')

const mercury: number = 0.2408467;
const venus: number = 0.61519726;
const mars: number = 1.8808158;
const jupiter: number = 11.862615 ;
const saturn: number = 29.447498;
const uranus: number = 84.016846;
const neptune: number = 164.79132;


const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault()
    const inputBox: HTMLInputElement | null = document.querySelector<HTMLInputElement>('input')

    let submittedAge = ''

    if (inputBox){
        submittedAge = inputBox.value
    }

    if (textToEdit){
        textToEdit.innerHTML =
            "On Mercury you are " + (Number(submittedAge)/ mercury) + '<br>' +
            "On Venus you are " + (Number(submittedAge)/ venus) + '<br>' +
            "On Mars you are " + (Number(submittedAge)/ mars) + '<br>' +
            "On Jupiter you are " + (Number(submittedAge)/ jupiter) + '<br>' +
            "On Saturn you are " + (Number(submittedAge)/ saturn) + '<br>' +
            "On Uranus you are " + (Number(submittedAge)/ uranus) + '<br>' +
            "On Neptune you are " + (Number(submittedAge)/ neptune)
    }


}

if (submitButton) {
    submitButton.addEventListener('submit', handleSubmit)
}
