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
exports.Jugador = void 0;
var empleado_1 = require("./empleado");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(pNombre, pEdad, pEfectivo, pSueldo, pNumeroCamiseta, pPosicion, pTitular) {
        var _this = _super.call(this, pNombre, pEdad, pEfectivo, pSueldo) || this;
        _this.numeroCamiseta = pNumeroCamiseta;
        _this.posicion = pPosicion;
        _this.titular = pTitular;
        return _this;
    }
    Jugador.prototype.setNumeroCamiseta = function (pNumeroCamiseta) {
        this.numeroCamiseta = pNumeroCamiseta;
    };
    Jugador.prototype.getNumeroCamiseta = function () {
        this.numeroCamiseta;
    };
    Jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.getTitular = function () {
        return this.titular;
    };
    return Jugador;
}(empleado_1.Empleado));
exports.Jugador = Jugador;
