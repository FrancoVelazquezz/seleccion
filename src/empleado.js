"use strict";
exports.__esModule = true;
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(pNombre, pEdad, pEfectivo, pSueldo) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.efectivo = pEfectivo;
        this.sueldo = pSueldo;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.getEdad = function () {
        return this.edad;
    };
    Empleado.prototype.getEfectivo = function () {
        return this.efectivo;
    };
    Empleado.prototype.setEfectivo = function (pEfectivo) {
        return this.efectivo = pEfectivo;
    };
    Empleado.prototype.getSueldo = function () {
        return this.sueldo;
    };
    Empleado.prototype.setSueldo = function (pSueldo) {
        return this.sueldo = pSueldo;
    };
    return Empleado;
}());
exports.Empleado = Empleado;
