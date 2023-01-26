let carrito = [];
//cargar carrito desde LS
if(localStorage.getItem("carrito")){
    carrito =JSON.parse(localStorage.getItem("carrito"));
}
const contenedorTerapias = document.getElementById("contenedorTerapias");

// mostrar terapias:

const mostrarTerapias = () => {
    terapias.forEach((terapias) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class= "tarjeta">
        <img src="${terapias.img}" class= "tarjetaImg" alt=" ${terapias.producto}">
        <h2>
         ${terapias.producto}
        </h2>    
        <h3>
        ${terapias.descripcion}
        </h3>
        <h3>
        Precio: ${terapias.precio}
        </h3>    
        <button class="btn" id="boton${terapias.id}">Agregar al carrito</button>     
        </div>
    
    `
    contenedorTerapias.appendChild(card);
     
    //agregar productos al carrito
    const boton = document.getElementById (`boton${terapias.id}`);
    boton.addEventListener("click", () => {
        console.log("click")
       introducirAlCarro(terapias.id)
        
    })
     
    })
  

}
mostrarTerapias();
//funcion para agregar terapias al carrito:
const introducirAlCarro = (id) =>{ 
    const terapia = terapias.find((terapias) => terapias.id === id);
    const productoEnCarrito= carrito.find((terapias) => terapias.id === id);
if (productoEnCarrito){
    productoEnCarrito.cantidad++;
}else {
    carrito.push(terapia);
    //agregamos al localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito));
    }
}



//modo oscuro:
const bdark= document.querySelector('#bdark');
const body =document.querySelector('body');

load()

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load(){
    const darkmode =localStorage.getItem('darkmode');
    if(!darkmode){
        store('false');
    }else if(darkmode =='true'){
        body.classList.add('darkmode');
    }
}
function store (value){
    localStorage.setItem('darkmode',value);
}

//ordenar terapias de a-z y z-a:
//const newterapias = terapias.slice()
//console.log(newproductos)
//console.log(terapias)
//const alfabetico =[...newterapias].sort((a,b) =>{
//    if(a.producto < b.producto){
//        return -1
//    } else if (a.producto > b.producto){
//        return 1
//    } else {
//        return 0
//    }
//})
//console.log (alfabetico)


//mostrar ofertas
//const filtrar = newproductos.filter((tera) =>{
//    return tera.oferta === true
//})