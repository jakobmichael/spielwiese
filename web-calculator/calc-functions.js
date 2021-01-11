function display(e) {
    document.getElementById("display").value += e.target.textContent;
}

function calculate(e) {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}






// function calculate() {
//     document.getElementById("display").value = eval(document.getElementById("display").value);
// }

// function calculate() {
//     try {
//         var result = eval(document.getElementById("display").value);
//         document.getElementById("display").value = result;
//     } catch {
//         alert(document.getElementById("display").value + " is an invalid expression, please check your input");
//         document.getElementById("display").textContent = "";
//     }
// }