//trabajo hecho por su servilleta Antonio Lopez Garcia
//====================================
// Clase hija Egreso
//====================================
class Egreso extends Dato {
  static contadorEgresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Egreso.contadorEgresos;
  }

  get id() {
    return this._id;
  }

}