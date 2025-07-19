let display_num = document.querySelector(".display_num");//Muestra el seguimiento de cada botón de la calculadora
let numbers = "";//variable interna que va a corde con display_num para realizar las operaciones de manera interna
let results = "";//variable para mostrar los resultados al usuario
let bool = null;//disparador del evento =

//Botones numéricos
document.querySelectorAll("#btn").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        reset();//esto me permite resetear la calculadora al terminar una operación sólo si el usuario NO ha ingresado un operador aritmético
        display_num.textContent += e.target.value;
        numbers += e.target.value;

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
    // numbers = eval(numbers).toFixed(2);
    display_num.textContent = eval(numbers).toFixed(2);

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
//Botón exp
document.querySelector("#exp").addEventListener("click", () => {
    display_num.textContent += "e";
    numbers += "e";
})
//sen cos tan
document.querySelectorAll(".btn.btn-secondary").forEach((boton) => {
    boton.addEventListener("click", (e) => {

        let option = e.target.textContent;
        let grados = numbers;
        let radianes = grados * (Math.PI / 180);
        bool = true;
        switch (option) {
            case "cos": {

                display_num.textContent = Math.cos(radianes).toFixed(5);
                numbers = display_num.textContent;
                break;
            }
            case "tan": {

                display_num.textContent = Math.tan(radianes).toFixed(5);
                numbers = display_num.textContent;
                break
            }
            case "sen": {

                display_num.textContent = Math.sin(radianes).toFixed(5);
                numbers = display_num.textContent;
                break;
            }

        }
    })
})
//raíz cuadrada
document.querySelector("#raiz").addEventListener("click", () => {
    display_num.textContent = Math.sqrt(numbers).toFixed(2);
    numbers = display_num.textContent;
    bool = true;
})
//elevar al cuadrado
document.querySelector("#cuadrado").addEventListener("click", () => {
    display_num.textContent = Math.pow(numbers, 2).toFixed(2);
    numbers = display_num.textContent;
})
document.querySelector("#potenciaGen").addEventListener("click", () => {
    display_num.textContent += "^";
    numbers += `**`;

})
document.querySelectorAll("#log").forEach((boton) => {
    boton.addEventListener("click", (e) => {

        let option = e.target.textContent;

        bool = true;
        switch (option) {
            case "log(x)": {
                display_num.textContent = Math.log10(eval(numbers)).toFixed(5);
                numbers = display_num.textContent;
                break;
            }
            case "ln(x)": {
                display_num.textContent = Math.log(eval(numbers)).toFixed(5);
                numbers = display_num.textContent;
                break;
            }
            default: break;
        }
    })
})
//al terminar una operación uso esta función para reiniciar display únicamente si no hay signos de operaciones
let operators = ["+", "-", "*", "/", "e", "(", ")"];
function reset() {
    if (bool && ![...display_num.textContent].some((element) => operators.includes(element))) {//pregunto si existe un operador aritmético en display antes de reiniciar
        display_num.textContent = "";
        bool = false;
        numbers = "";
    }
}









