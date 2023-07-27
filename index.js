const select = document.querySelector('[name="select"]');
const firstValue = document.querySelector('[value="value1"]');
const secondValue = document.querySelector('[value="value2"]');
const thirdValue = document.querySelector('[value="value3"]');
const firstP = document.querySelector('.p1');
select.addEventListener("change", () => {
    if (select.value === firstValue.value) {
        firstP.textContent = "Ви обрали каву"
    }
    else if (select.value === secondValue.value) {
        firstP.textContent = "Ви обрали чай"
    }
    else if (select.value === thirdValue.value) {
        firstP.textContent = "Ви обрали сік"
    }
});

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const secondP = document.querySelector('.p2');
button.addEventListener("click", () => {
    switch (input.value) {
        case "Понеділок":
            secondP.textContent = "Це робочий день"
            break;
        case "Вівторок":
            secondP.textContent = "Це робочий день"
            break;
        case "Середа":
            secondP.textContent = "Це робочий день"
            break;
        case "Четвер":
            secondP.textContent = "Це робочий день"
            break;
        case "П'ятниця":
            secondP.textContent = "Це робочий день"
            break;
        case "Субота":
            secondP.textContent = "Це вихідний день"
            break;
        case "Неділя":
            secondP.textContent = "Це вихідний день"
            break;
        default:
            secondP.textContent = "Це не день тижня";
    }
});

const secondInput = document.querySelector('.input2');
const secondButton = document.querySelector('.button2');
const thirdP = document.querySelector('.p3');
secondButton.addEventListener("click", () => {
    switch (secondInput.value) {
        case "12":
        case "1":
        case "2":
            thirdP.textContent = "Зима"
            break;
        case "3":
        case "4":
        case "5":
            thirdP.textContent = "Весна"
            break;
        case "6":
        case "7":
        case "8":
            thirdP.textContent = "Літо"
            break;
        case "9":
        case "10":
        case "11":
            thirdP.textContent = "Осінь"
            break;
        default:
            thirdP.textContent = "Це не місяць";
    }
});

const thirdInput = document.querySelector('.input3');
const thirdButton = document.querySelector('.button3');
const fourthP = document.querySelector('.p4');
thirdButton.addEventListener("click", () => {
    switch (thirdInput.value) {
        case "1":
            fourthP.textContent = "31"
            break;
        case "2":
            fourthP.textContent = "28"
            break;
        case "3":
            fourthP.textContent = "31"
            break;
        case "4":
            fourthP.textContent = "30"
            break;
        case "5":
            fourthP.textContent = "31"
            break;
        case "6":
            fourthP.textContent = "30"
            break;
        case "7":
            fourthP.textContent = "31"
            break;
        case "8":
            fourthP.textContent = "31"
            break;
        case "9":
            fourthP.textContent = "30"
            break;
        case "10":
            fourthP.textContent = "31"
            break;
        case "11":
            fourthP.textContent = "30"
            break;
        case "12":
            fourthP.textContent = "31"
            break;
        default:
            fourthP.textContent = "Це не місяць";
    }
});

const fourthInput = document.querySelector('.input4');
const fourthButton = document.querySelector('.button4');
const fifthP = document.querySelector('.p5');
fourthButton.addEventListener("click", () => {
    switch (fourthInput.value) {
        case "Червоний":
            fifthP.textContent = "Стоп!"
            break;
        case "Жовтий":
            fifthP.textContent = "Чекати"
            break;
        case "Зелений":
            fifthP.textContent = "Йти"
            break;
        default:
            fifthP.textContent = "Це не колір світлофору";
    }
});

const fifthButton = document.querySelector('.button5');
const fifthInput = document.querySelector('.input5.1');
const sixthInput = document.querySelector('.input5.2');
const sixthP = document.querySelector('.p6');
const secondSelect = document.querySelector('[name="select2"]');
const firstOption = document.querySelector('[value="option1"]');
const secondOption = document.querySelector('[value="option2"]');
const thirdOption = document.querySelector('[value="option3"]');
const fourthOption = document.querySelector('[value="option4"]');
fifthButton.addEventListener("click", () => {
    switch (secondSelect.value) {
        case firstOption.value:
            sixthP.textContent = Number(fifthInput.value) + Number(sixthInput.value)
            break;
        case secondOption.value:
            sixthP.textContent = Number(fifthInput.value) - Number(sixthInput.value)
            break;
        case thirdOption.value:
            sixthP.textContent = Number(fifthInput.value) * Number(sixthInput.value)
            break;
        case fourthOption.value:
            sixthP.textContent = Number(fifthInput.value) / Number(sixthInput.value)
            break;
    }
});