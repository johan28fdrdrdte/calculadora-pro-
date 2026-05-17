function calcular() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operacion").value;

  if (isNaN(a) || isNaN(b)) {
    alert("Ingresa ambos números");
    return;
  }

  let resultado = 0;
  let pasos = "";
  let simbolo = "";

  switch(op) {

    case "sumar":
      resultado = a + b;
      pasos = `${a} + ${b} = ${resultado}`;
      simbolo = "+";
      break;

    case "restar":
      resultado = a - b;
      pasos = `${a} - ${b} = ${resultado}`;
      simbolo = "-";
      break;

    case "multiplicar":
      resultado = a * b;
      pasos = multiplicacionLarga(a, b);
      simbolo = "×";
      break;

    case "dividir":
      if (b === 0) {
        alert("No se puede dividir entre 0");
        return;
      }
      resultado = a / b;
      pasos = `${a} ÷ ${b} = ${resultado}`;
      simbolo = "÷";
      break;
  }

  // MOSTRAR RESULTADOS
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("pasos").textContent = pasos;

  // GUARDAR HISTORIAL
  agregarHistorial(`${a} ${simbolo} ${b} = ${resultado}`);
}

/* MULTIPLICACIÓN PASO A PASO */
function multiplicacionLarga(a, b) {
  let num2 = b.toString().split("").reverse();
  let resultados = [];

  for (let i = 0; i < num2.length; i++) {
    let parcial = (a * parseInt(num2[i])).toString() + "0".repeat(i);
    resultados.push(parcial);
  }

  let resultadoFinal = resultados.reduce((x, y) => x + parseInt(y), 0);

  return resultados.join("\n") + "\n------\n" + resultadoFinal;
}

/* LIMPIAR */
function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").textContent = "0";
  document.getElementById("pasos").textContent = "";
}

/* COPIAR */
function copiar() {
  let resultado = document.getElementById("resultado").textContent;
  navigator.clipboard.writeText(resultado);
  alert("Resultado copiado 📋");
}

/* HISTORIAL */
function agregarHistorial(texto) {
  let lista = document.getElementById("historial");
  let item = document.createElement("li");
  item.textContent = texto;
  lista.prepend(item);
}