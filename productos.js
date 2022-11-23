class Producto{
    constructor(imagen, categoria, nproducto, pproducto, descripcion){
        this._imagen = imagen;
        this._categoria = categoria;
        this._nproducto = nproducto;
        this._pproducto = pproducto;
        this._descripcion = descripcion;
      
    }
    get imagen(){
        return this._imagen;
    }
    set imagen(imagen){
        this._imagen = imagen;
    }
    get categoria(){
        return this._categoria;
    }
    set categoria(categoria){
        return this._categoria = categoria;
    }
    get nproducto(){
        return this._nproducto;
    }
    set nproducto(nproducto){
        this._nproducto = nproducto;
    }
    get pproducto(){
        return this._pproducto;
    }
    set pproducto(pproducto){
        return this._pproducto = pproducto;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        return this._descripcion = descripcion;
    }
}