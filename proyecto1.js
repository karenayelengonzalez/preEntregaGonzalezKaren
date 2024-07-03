//app para carniceria :
// el pproyecto se basa en hacer una app con botones
//donde la cajera aprete el boton ventas y vayan sumando
//las ventas del dia
alert("Bienvenido");
let usuario = prompt("Coloque nombre de Usuario");
let contraseña = prompt("Codigo de ingreso:");
alert("Bienvenido " + usuario);
console.log("USUARIO " + usuario);
//aqui se le va a dar acceso total al dueño para ver el resultado de las ventas
//los demas empleados solo tienen acceso para poner las ventas, los gastos y las boletas
if (usuario === "sergio") {
  console.log("Tiene acceso total");
} else {
  console.log("Tiene acceso a ventas, gastos, boletas");
}
//la idea que ir sumando las ventas que hace la cajera
function ventas() {
  let venta1 = 11500;
  let venta2 = 15000;
  return venta1 + venta2;
}
let resultadoVenta = ventas();
console.log("Ventas " + resultadoVenta);
//en este caso deberia ir sumando los gastos del dia
function gastos() {
  let gasto1 = 3000;
  let gasto2 = 2000;
  return gasto1 + gasto2;
}
let resultadoGastos = gastos();
console.log("Gastos " + resultadoGastos);
//en este caso se sumarian las compras que se hicieron para esa carniceria ese dia
function compras() {
  let compra1 = 5000;
  let compra2 = 5000;
  return compra1 + compra2;
}
let resultadoCompra = compras();
console.log("Compras " + resultadoCompra);
//aqui deberia ir restandose del total del las ventas el dinero que se retira en caja
//se retira dinero para uqe la cajera no tenta tanto efecivo encima
function retiro() {
  let retiro1 = 10000;
  let retiro2 = 10000;
  return retiro1 + retiro2;
}
let resultadoRetiro = retiro();
console.log("Retiro " + resultadoRetiro);
let cajaFinal = resultadoVenta - resultadoRetiro;
console.log("Caja Final: " + cajaFinal);
//la caja final es la que queda como caja de inicial del dia siguiente
//
//en este espacio quiero hacer un buscador en donde el empleado o el jefe
//pueda buscar el corte de carne y le devuelva el precio del mismo.
// function buscarPrecioDelCorte(corte) {
//   let precio;
//   let nombreCorte = prompt("ingrese el nombre del corte de carne ");
//   switch (nombreCorte) {
//     case "asado":
//       precio = 5000;
//       break;
//     default:
//       precio = "corte no encontrado";
//   }
//   return precio;
// }
// if (precio !== "corte no encontrado") {
//   alert("El precio del " + nombreCorte + "es:$" + precio);
// } else {
//   alert("corte no encontrado");
// }

// console.log(buscarPrecioDelCorte("asado"));
function buscarPrecio() {
  let nombreCorte = prompt("ingrese nombre del corte");
  let precio;
  switch (nombreCorte) {
    case "asado":
      precio = 5000;
      break;
    case "paleta":
      precio = 6000;
      break;
    case "bife":
      precio = 5800;
      break;
    case "cuadril":
      precio = 7500;
      break;
    case "nalga":
      precio = 7500;
      break;
    case "vacio":
      precio = 6200;
      break;
    case "entraña":
      precio = 5700;
      break;
    case "espinazo":
      precio = 2000;
      break;
    case "osobuco":
      precio = 3500;
      break;
    case "lomo":
      precio = 7500;
      break;
    case "hueso":
      precio = 1500;
      break;
    default:
      precio = "corte no encontrado";
  }
  if (precio !== "corte no encontrado") {
    alert("el precio de " + nombreCorte + " es: $" + precio);
  } else {
    alert("corte no encontrado");
  }
}
buscarPrecio();
