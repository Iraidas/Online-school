let data = {
    A1: {
        prices: ["1 200", "1 300", "1 400", "1 600"],
        fullCosts: ["14 400", "10 400", "5 600"],
    },
    A2: {
        prices: ["1 200", "1 300", "1 400", "1 600"],
        fullCosts: ["14 400", "10 400", "5 600"],
    },
    B1: {
        prices: ["1 200", "1 300", "1 400", "1 600"],
        fullCosts: ["14 400", "10 400", "5 600"],
    },
    B2: {
        prices: ["1 500", "1 625", "1 750", "2 000"],
        fullCosts: ["18 000", "13 000", "7 000"],
    },
    C1: {
        prices: ["1 725", "1 868", "2 012", "2 300"],
        fullCosts: ["20 700", "14 950", "8 050"],
    },
};

let select = document.querySelector(".select");
select.addEventListener("change", function () {
    changeOptions(this.value);
});

let buttons = document.querySelectorAll(".title-tab");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        changeOptions(this.value);
    });
}

function changeOptions(value) {
    let costs = document.querySelectorAll(".cost-individual-lesson");
    let quests = document.querySelectorAll(".question");

    let pricesArray = data[value].prices;
    let fullCostsArray = data[value].fullCosts;

    for (let i = 0; i < pricesArray.length; i++) {
        costs[i].innerHTML = pricesArray[i] + " руб";
    }

    for (let i = 0; i < fullCostsArray.length; i++) {
        quests[i].setAttribute(
            "data-title",
            "Стоимость абонемента: " + fullCostsArray[i] + " руб"
        );
    }
}
