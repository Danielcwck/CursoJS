// Calculadora de propinas de un restaurante
// Dependiendo del monto de la cuenta solicitado por medio de prompt,
// Se requiere calcular la propina de acuerdo al porcentaje ingresado

const valorCuenta = Number(prompt("Ingresa el valor de tu cuenta"));
const porcentajePropina = Number(
  prompt("Ingresa el porcentaje de propina deseado en un rango de 0 a 100")
); // Propina

const calcularPropina = (costoCuenta, propina) => {
  return costoCuenta * (propina / 100);
};

console.log(
  "El valor de la propina es: " +
    calcularPropina(valorCuenta, porcentajePropina)
);
