//trabajo hecho por su servilleta Antonio Lopez Garcia

//====================================
// Arreglos de la aplicación
//====================================
const ingresos = [
  new Ingreso("Salario", 10000),
  new Ingreso("Venta auto", 50000),
  new Ingreso("honorario", 5000),
];

const egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];
/*
//====================================
//Datos de prueba
//====================================

let ingresos = [9000, 400]
let egresos = [900, 400] */

//====================================
// Función cargarCabecero
//====================================
const cargarCabecero = () => {
  console.log(totalIngresos(), totalEgresos());
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso =
    totalIngresos() > 0 ? totalEgresos() / totalIngresos() : 0;
  console.log(porcentajeEgreso);
  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
  console.log(formatoMoneda(totalIngresos()));
  console.log(formatoMoneda(totalEgresos()));
  console.log(presupuesto);
  console.log(porcentajeEgreso);
  console.log(totalIngresos());
  console.log(totalEgresos());
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML =
    formatoMoneda(totalIngresos());
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());

  /*
//====================================
// Función cargarCabecero version 1
//====================================
const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
*/

  /*
    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());
    */
};

//====================================
// Función totalIngresos
//====================================
const totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

//====================================
// Función totalEgresos
//====================================
const totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

//avance2
//====================================
// Función formatoMoneda
//====================================
const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
};

//====================================
// Función formatoPorcentaje
//====================================
/*const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};*/
// Función formatoPorcentaje
const formatoPorcentaje = (valor) => {
  const opciones = {
    style: "percent",
    minimumFractionDigits: 2,
  };
  console.log(valor.toLocaleString("es-MX", opciones));
  return valor.toLocaleString("es-MX", opciones);
};
/*
//====================================
//llamada a la funcion / creo que se reemplaza
//====================================
cargarCabecero();
*/

//====================================
// Función cargarApp
//====================================
const cargarApp = () => {
  console.log(cargarCabecero);
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

//====================================
// Función cargarIngresos
//====================================
const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};
//====================================
// Función crearIngresoHTML
//====================================
const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onclick="eliminarIngreso(${ingreso.id})"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;
  return ingresoHTML;
};

//====================================
// Función cargarEgresos
//====================================
const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};
//====================================
// Función crearEgresoHTML
//====================================
const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>
        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon
              name="close-circle-outline"
              onclick="eliminarEgreso(${egreso.id})"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  `;
  return egresoHTML;
};

//====================================
// Función eliminaringreso
//====================================
const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

//====================================
// Función eliminarEgreso
//====================================
const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

//====================================
// Función agregarDato
//====================================
const agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];

  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, Number(valor.value)));
      cargarCabecero();
      cargarEgresos();
    }
  }
  document.getElementById("descripcion").value = '' 
  document.getElementById("valor").value = '' 
};
/*
else if (tipo.value === "egreso") {
      ingresos.push(new Egreso(descripcion.value, Number(valor.value)));
      cargarCabecero();
      cargarEgresos();
*/
