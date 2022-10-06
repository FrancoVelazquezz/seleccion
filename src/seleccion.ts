import { Entrenador } from "./entrenador";
import { Jugador } from "./jugador";
import { Masajista } from "./masajista";

export class Seleccion{
    private listaJugadores:Jugador[];
    private entrendor:Entrenador[];
    private masajista:Masajista[];

    constructor(pListaJugadores:Jugador[], pEntrenador:Entrenador[], pMasajista:Masajista[]){
        this.listaJugadores = pListaJugadores;
        this.entrendor = pEntrenador;
        this.masajista = pMasajista;
    }

    public ficharJugador(pJugador:Jugador){
            this.listaJugadores.push(pJugador);
            console.log('Fichado')
            return pJugador
        }

    public despedirJugador(pJugador:Jugador){
        for(let i:number = 0; i < this.listaJugadores.length; i++){
            if(pJugador === this.listaJugadores[i]){
                this.listaJugadores.splice(i,1)
            }
        }
        return console.log('Jugador despedido')
    }

    public contratarEntrenador(pEntrenador:Entrenador){
        this.entrendor.push(pEntrenador);
        console.log('Entrenador contratado')
        return pEntrenador
    }

    public despedirEntrenador(pEntrenador:Entrenador){
        for(let i:number = 0; i < this.entrendor.length; i++){
            if(pEntrenador === this.entrendor[i]){
                this.entrendor.splice(i,1)
            }
        }
        return console.log('Entrenador despedido')
    }

    public contratarMasajista(pMasajista:Masajista){
        this.masajista.push(pMasajista);
        console.log('Masajista contratado')
        return pMasajista
    }

    public despedirMasajista(pMasajista:Masajista){
        for(let i:number = 0; i < this.masajista.length; i++){
            if(pMasajista === this.masajista[i]){
                this.masajista.splice(i,1)
            }
        }
        return console.log('Masajista despedido')
    }    

}   

let primerEntrenador = new Entrenador('Juan', 50, true, 5000, 'cardio', 12)
let segundoEntrenador = new Entrenador('Ariel', 60, false, 3000, 'Pesas', 6)

console.log(primerEntrenador.setTipoEntrenamiento('Pesas'))

console.log(primerEntrenador)

let primerMasajista = new Masajista('alex', 34, true, 3000, 'abdominal', 60, 'martes')
let segundoMasajista = new Masajista('alexa', 29, true, 4000, 'recuperatorio', 90, 'viernes')

console.log(primerMasajista.setTiempoMasaje(30))

console.log(primerMasajista)

let primerJugador = new Jugador('Messi', 35, true, 400000, 10, 'Delantero', true)
let segundoJugador = new Jugador('Franco', 19, true, 7000, 9, 'Defensor', false)

console.log(primerJugador.setNumeroCamiseta(30))

console.log(primerJugador)

let director = new Seleccion([primerJugador],[primerEntrenador],[primerMasajista])

console.log(director.ficharJugador(segundoJugador))
console.log(director.despedirEntrenador(primerEntrenador))
console.log(director.contratarMasajista(segundoMasajista))

console.log(director)