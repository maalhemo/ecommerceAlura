const productos = [
    // new Producto ('imagen1', 'consolas', 'pandora','10000','consola 3000 juegos'),
    // new Producto ('imagen2', 'otros', 'escritorio','1000','color negro')
];

function mostrarProducto(){
    console.log('Mostrar productos agregados...');
    let texto = '';
    for(let producto of productos){
        console.log(producto);
        texto += `<li>${producto.imagen} ${producto.categoria} ${producto.nproducto} ${producto.pproducto} ${producto.descripcion}</li>`;
    }
    document.getElementById('productos').innerHTML = texto;
 
}

function agregarProducto(){
    const forma = document.forms['forma'];
    const imagen = forma['imagen'];
    const categoria= forma['categoria'];
    const nproducto= forma['nproducto'];
    const pproducto= forma['pproducto'];
    const descripcion= forma['descripcion'];
    if(imagen.value != '' && categoria.value != ''  && nproducto.value != ''  && pproducto.value != ''  && descripcion.value != ''){
        const producto = new Producto(imagen.value, categoria.value, nproducto.value, pproducto.value, descripcion.value);
        console.log(producto);
        productos.push(producto);
        mostrarProducto();
        alert ("Producto agregado");
    }
    else{
        console.log('No hay información que agregar');
    }
}

/*************************formulario*********************/

const mensajes = [
    // new Mensaje('pepe pecas', 'que consolas nuevas saldran?'),
];


function agregarMensaje(){
    const formu= document.forms['formu'];
    const nombre = formu['nombre'];
    const mensaje1= formu['mensaje1'];
    
    if(nombre.value != '' && mensaje1.value != ''){
        const mensaje = new Mensaje(nombre.value, mensaje1.value);
        console.log(mensaje);
        mensajes.push(mensaje);
        mostrarMensaje();
        alert ("Mensaje enviado");
    }
    else{
        console.log('No hay información que agregar');
    }
}

function mostrarMensaje(){
    console.log('Mostrar Mensajes..');
    let texto = '';
    for(let mensaje of mensajes){
        console.log(mensaje);
        texto += `<li>${mensaje.nombre} ${mensaje.mensaje1} </li>`;
    }
    document.getElementById('mensajes').innerHTML = texto;
 
}

       
