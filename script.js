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
  let num1 = a.toString();
  let num2 = b.toString().split("").reverse();

  let resultados = [];

  for (let i = 0; i < num2.length; i++) {
    let digito = parseInt(num2[i]);
    let parcial = (a * digito).toString() + "0".repeat(i);
    resultados.push(parcial);
  }

  let resultadoFinal = resultados
    .map(n => parseInt(n))
    .reduce((x, y) => x + y, 0)
    .toString();

  let ancho = Math.max(
    num1.length,
    b.toString().length + 2,
    ...resultados.map(r => r.length),
    resultadoFinal.length
  );

  let pasos = "";

  pasos += num1.padStart(ancho) + "\n";
  pasos += ("× " + b).padStart(ancho) + "\n";
  pasos += "-".repeat(ancho) + "\n";

  resultados.forEach(r => {
    pasos += r.padStart(ancho) + "\n";
  });

  pasos += "-".repeat(ancho) + "\n";
  pasos += resultadoFinal.padStart(ancho);

  return pasos;
}