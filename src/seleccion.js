"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var entrenador_1 = require("./entrenador");
var jugador_1 = require("./jugador");
var masajista_1 = require("./masajista");
var Seleccion = /** @class */ (function () {
    function Seleccion(pListaJugadores, pEntrenador, pMasajista) {
        this.listaJugadores = pListaJugadores;
        this.entrendor = pEntrenador;
        this.masajista = pMasajista;
    }
    Seleccion.prototype.ficharJugador = function (pJugador) {
        this.listaJugadores.push(pJugador);
        console.log('Fichado');
        return pJugador;
    };
    Seleccion.prototype.despedirJugador = function (pJugador) {
        for (var i = 0; i < this.listaJugadores.length; i++) {
            if (pJugador === this.listaJugadores[i]) {
                this.listaJugadores.splice(i, 1);
            }
        }
        return console.log('Jugador despedido');
    };
    Seleccion.prototype.contratarEntrenador = function (pEntrenador) {
        this.entrendor.push(pEntrenador);
        console.log('Entrenador contratado');
        return pEntrenador;
    };
    Seleccion.prototype.despedirEntrenador = function (pEntrenador) {
        for (var i = 0; i < this.entrendor.length; i++) {
            if (pEntrenador === this.entrendor[i]) {
                this.entrendor.splice(i, 1);
            }
        }
        return console.log('Entrenador despedido');
    };
    Seleccion.prototype.contratarMasajista = function (pMasajista) {
        this.masajista.push(pMasajista);
        console.log('Masajista contratado');
        return pMasajista;
    };
    Seleccion.prototype.despedirMasajista = function (pMasajista) {
        for (var i = 0; i < this.masajista.length; i++) {
            if (pMasajista === this.masajista[i]) {
                this.masajista.splice(i, 1);
            }
        }
        return console.log('Masajista despedido');
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
var primerEntrenador = new entrenador_1.Entrenador('Juan', 50, true, 5000, 'cardio', 12);
var segundoEntrenador = new entrenador_1.Entrenador('Ariel', 60, false, 3000, 'Pesas', 6);
console.log(primerEntrenador.setTipoEntrenamiento('Pesas'));
console.log(primerEntrenador);
var primerMasajista = new masajista_1.Masajista('alex', 34, true, 3000, 'abdominal', 60, 'martes');
var segundoMasajista = new masajista_1.Masajista('alexa', 29, true, 4000, 'recuperatorio', 90, 'viernes');
console.log(primerMasajista.setTiempoMasaje(30));
console.log(primerMasajista);
var primerJugador = new jugador_1.Jugador('Messi', 35, true, 400000, 10, 'Delantero', true);
var segundoJugador = new jugador_1.Jugador('Franco', 19, true, 7000, 9, 'Defensor', false);
console.log(primerJugador.setNumeroCamiseta(30));
console.log(primerJugador);
var director = new Seleccion([primerJugador], [primerEntrenador], [primerMasajista]);
console.log(director.ficharJugador(segundoJugador));
console.log(director.despedirEntrenador(primerEntrenador));
console.log(director.contratarMasajista(segundoMasajista));
console.log(director);
