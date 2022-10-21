let array = [
    "свободно разговаривать с носителями языка",
    "учиться и работать на немецком языке",
    "поступить в университет в Германии или Австрии",
    "устроиться на работу в Германии, Австрии или Швейцарии",
];

let j = 0;

printLetters(0);

function printLetters(i) {
    let text = document.querySelector(".add-head");

    let str = array[j];
    j++;

    let interval = setInterval(function () {
        text.innerHTML += str.split("")[i];
        i++;

        if (i >= str.length) {
            clearInterval(interval);
            setTimeout(function () {
                text.innerHTML = "";
                printLetters(0);
            }, 2000);
        } else if (j >= array.length) {
            j = 0;
        }
    }, 60);
}
