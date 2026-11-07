let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));


buttons.map(button => {
    button.addEventListener("click", (e) => {

        switch (e.target.innerText) {

            case "Clr":
                display.value = "";
                break;

            case "=":
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
                break;

            default:
                display.value += e.target.innerText;

        }
    });
});