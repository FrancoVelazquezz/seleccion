"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Masajista = void 0;
var empleado_1 = require("./empleado");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pEdad, pEfectivo, pSueldo, pTipoMasaje, pTiempoMasaje, pTurno) {
        var _this = _super.call(this, pNombre, pEdad, pEfectivo, pSueldo) || this;
        _this.tipoMasaje = pTipoMasaje;
        _this.tiempoMasaje = pTiempoMasaje;
        _this.turno = pTurno;
        return _this;
    }
    Masajista.prototype.setTipoMasaje = function (pTipoMasaje) {
        return this.tipoMasaje = pTipoMasaje;
    };
    Masajista.prototype.getTipoMasaje = function () {
        return this.tipoMasaje;
    };
    Masajista.prototype.setTiempoMasaje = function (pTiempoMasaje) {
        return this.tiempoMasaje = pTiempoMasaje;
    };
    Masajista.prototype.getTiempoMasaje = function () {
        return this.tiempoMasaje;
    };
    Masajista.prototype.setTurno = function (pTurno) {
        return this.turno = pTurno;
    };
    Masajista.prototype.getTurno = function () {
        return this.turno;
    };
    return Masajista;
}(empleado_1.Empleado));
exports.Masajista = Masajista;
