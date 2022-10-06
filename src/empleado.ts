export abstract class Empleado {
    private nombre: string;
    private edad: number;
    private efectivo: boolean;
    private sueldo: number;
    
    constructor(pNombre:string, pEdad:number, pEfectivo:boolean, pSueldo:number){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.efectivo = pEfectivo;
        this.sueldo = pSueldo;
    }

    public getNombre():string{
        return this.nombre
    }

    public getEdad():number{
        return this.edad
    }

    public getEfectivo():boolean{
        return this.efectivo
    }

    public setEfectivo(pEfectivo:boolean):boolean{
        return this.efectivo = pEfectivo
    }

    public getSueldo():number{
        return this.sueldo
    }

    public setSueldo(pSueldo:number):number{
        return this.sueldo = pSueldo
    }
}