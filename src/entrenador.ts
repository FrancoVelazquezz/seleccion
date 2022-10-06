import { Empleado } from "./empleado";

export class Entrenador extends Empleado{
    private tipoEntrenamiento: string;
    private aniosExp: number;

    constructor(pNombre:string, pEdad:number, pEfectivo:boolean, pSueldo:number, pTipoEntrenamiento:string, pAniosExp:number){
        super(pNombre, pEdad, pEfectivo, pSueldo)
        this.tipoEntrenamiento = pTipoEntrenamiento;
        this.aniosExp = pAniosExp;
    }

    public setTipoEntrenamiento(pTipoEntrenamiento:string):string{
        return this.tipoEntrenamiento = pTipoEntrenamiento
    }

    public getTipoEntrenamiento():string{
        return this.tipoEntrenamiento
    }

    public getAniosExp():number{
        return this.aniosExp
    }
}

