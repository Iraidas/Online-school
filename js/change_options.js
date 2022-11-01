if (screen.width <= "465"){
    let select = document.querySelector(".select");

    select.addEventListener("change", function () {
        console.log(this.value);
        changeOption(this.value);
    });
}

else {
    let buttons = document.querySelectorAll(".title-tab");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

            changeOption(buttons[i].value);
        });
    }
}

function changeOption(value) {
    switch (value) {
        default:
            changePrices(["1 200", "1 300", "1 400", "1 600"]);
            changeFullCosts(["14 400", "10 400", "5 600"]);
            break;
        case "4":
            changePrices(["1 500", "1 625", "1 750", "2 000"]);
            changeFullCosts(["18 000", "13 000", "7 000"]);
            break;
        case "5":
            changePrices(["1 725", "1 868", "2 012", "2 300"]);
            changeFullCosts(["20 700", "14 950", "8 050"]);
            break;
    }
}

function changePrices(array) {
    let costs = document.querySelectorAll(".cost-individual-lesson");

    for (let i = 0; i < array.length; i++) {
        costs[i].innerHTML = array[i] + " руб";
    }
}

function changeFullCosts(array) {
    let quests = document.querySelectorAll(".question");

    for (let i = 0; i < array.length; i++) {
        quests[i].setAttribute(
            "data-title",
            "Стоимость абонемента: " + array[i] + " руб"
        );
    }
}
