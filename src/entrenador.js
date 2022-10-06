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
exports.Entrenador = void 0;
var empleado_1 = require("./empleado");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(pNombre, pEdad, pEfectivo, pSueldo, pTipoEntrenamiento, pAniosExp) {
        var _this = _super.call(this, pNombre, pEdad, pEfectivo, pSueldo) || this;
        _this.tipoEntrenamiento = pTipoEntrenamiento;
        _this.aniosExp = pAniosExp;
        return _this;
    }
    Entrenador.prototype.setTipoEntrenamiento = function (pTipoEntrenamiento) {
        return this.tipoEntrenamiento = pTipoEntrenamiento;
    };
    Entrenador.prototype.getTipoEntrenamiento = function () {
        return this.tipoEntrenamiento;
    };
    Entrenador.prototype.getAniosExp = function () {
        return this.aniosExp;
    };
    return Entrenador;
}(empleado_1.Empleado));
exports.Entrenador = Entrenador;
