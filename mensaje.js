class Mensaje{
    constructor(nombre, mensaje1){
        this._nombre = nombre;
        this._mensaje1 = mensaje1;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get mensaje1(){
        return this._mensaje1;
    }
    set mensaje1(mensaje1){
        return this._mensaje1 = mensaje1;
    }
    
}