function calcular() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Ingresa ambos números");
    return;
  }

  let pasos = multiplicacionLarga(a, b);

  document.getElementById("resultado").textContent = a * b;
  document.getElementById("pasos").textContent = pasos;
}

function multiplicacionLarga(a, b) {
  let num2 = b.toString().split("").reverse();
  let resultados = [];

  for (let i = 0; i < num2.length; i++) {
    let parcial = (a * parseInt(num2[i])).toString() + "0".repeat(i);
    resultados.push(parcial);
  }

  let resultadoFinal = resultados.reduce((x, y) => x + parseInt(y), 0);

  let pasos = resultados.join("\n") + "\n------\n" + resultadoFinal;

  return pasos;
}