import { Empleado } from "./empleado";

export class Jugador extends Empleado{
    private numeroCamiseta:number;
    private posicion:string;
    private titular:boolean;

    constructor(pNombre:string, pEdad:number, pEfectivo:boolean, pSueldo:number, pNumeroCamiseta:number, pPosicion:string, pTitular:boolean){
        super(pNombre, pEdad, pEfectivo, pSueldo)
        this.numeroCamiseta = pNumeroCamiseta;
        this.posicion = pPosicion;
        this.titular = pTitular;
    }

    public setNumeroCamiseta(pNumeroCamiseta:number):void{
        this.numeroCamiseta = pNumeroCamiseta
    }

    public getNumeroCamiseta():void{
        this.numeroCamiseta
    }

    public getPosicion():string{
        return this.posicion
    }

    public getTitular():boolean{
        return this.titular
    }
}


