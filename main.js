let display_num = document.querySelector(".display_num");//Muestra el seguimiento de cada botón de la calculadora
let numbers = "";//variable interna que va a corde con display_num para realizar las operaciones de manera interna
let results = "";//variable para mostrar los resultados al usuario
let bool = null;//disparador del evento =

//Botones numéricos
document.querySelectorAll("#btn").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        reset();//esto me permite resetear la calculadora al terminar una operación sólo si el usuario NO ha ingresado un operador aritmético
        display_num.textContent += e.target.value;
        numbers += e.target.textContent;

    })
})
//Botones para las OPERACIONES ARITMETICAS
document.querySelectorAll("#operators").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        display_num.textContent += e.target.textContent;
        numbers += e.target.textContent;
    })

})
//BOTÓN para mostrar resultados =
document.querySelector("#igual").addEventListener("click", () => {
    bool = true;// 
    let decimal = Number(eval(numbers));
    display_num.textContent = decimal.toFixed(2);
    numbers = display_num.textContent;
})
//Botón para eliminar elementos en display_num ELIMINAR ELEMENTOS 
document.querySelector("#del").addEventListener("click", () => {
    let cut = numbers.length - 1;
    display_num.textContent = numbers.slice(0, cut);
    numbers = display_num.textContent;

})
//Botón para REINICIAR TODO
document.querySelector("#ac").addEventListener("click", () => {
    numbers = "";
    results = "";
    bool = null;
    display_num.textContent = "";
})

//al terminar una operación uso esta función para reiniciar display únicamente si no hay signos de operaciones
let operators = ["+", "-", "*", "/"];
function reset() {
    if (bool && ![...display_num.textContent].some((element) => operators.includes(element))) {//pregunto si existe un operador aritmético en display antes de reiniciar
        display_num.textContent = "";
        bool = false;
        numbers = "";
    }
}










