//trabajo hecho por su servilleta Antonio Lopez Garcia
//====================================
// Clase hija Ingreso
//====================================
class Ingreso extends Dato {
  static contadorIngresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Ingreso.contadorIngresos;
  }

  get id() {
    return this._id;
  }
};

