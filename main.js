let display_num = document.querySelector(".display_num");
let numbers = "";
let results = "";
let bool = null;


document.querySelectorAll("#btn").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        if (bool) {
            display_num.textContent = "";
            bool = false;
            numbers = "";
        }

        display_num.textContent += e.target.value;
        numbers += e.target.textContent;

    })
})
//OPERACIONES ARITMETICAS
document.querySelectorAll("#operators").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        display_num.textContent += e.target.textContent;
        numbers += e.target.textContent;
    })

})
//BOTÓN DE =
document.querySelector("#igual").addEventListener("click", () => {
    bool = true;
    let decimal = Number(eval(numbers));
    display_num.textContent = decimal.toFixed(2);
    numbers = display_num.textContent;
})
//ELIMINAR ELEMENTOS 
document.querySelector("#del").addEventListener("click", () => {
    let cut = numbers.length - 1;
    display_num.textContent = numbers.slice(0, cut);
    numbers = display_num.textContent;

})
//REINICIAR TODO
document.querySelector("#ac").addEventListener("click", () => {
    numbers = "";
    results = "";
    bool = null;
    display_num.textContent = "";
})










