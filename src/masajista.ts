import { Empleado } from "./empleado";

export class Masajista extends Empleado{
    private tipoMasaje: string;
    private tiempoMasaje: number;
    private turno: string;

    constructor(pNombre:string, pEdad:number, pEfectivo:boolean, pSueldo:number, pTipoMasaje:string, pTiempoMasaje:number, pTurno:string){
        super(pNombre, pEdad, pEfectivo, pSueldo)
        this.tipoMasaje = pTipoMasaje;
        this.tiempoMasaje = pTiempoMasaje;
        this.turno = pTurno;
    }

    public setTipoMasaje(pTipoMasaje:string):string{
        return this.tipoMasaje = pTipoMasaje
    }

    public getTipoMasaje():string{
        return this.tipoMasaje
    }

    public setTiempoMasaje(pTiempoMasaje:number):number{
        return this.tiempoMasaje = pTiempoMasaje
    }

    public getTiempoMasaje():number{
        return this.tiempoMasaje 
    }

    public setTurno(pTurno:string):string{
        return this.turno = pTurno
    }

    public getTurno():string{
        return this.turno
    }
}

