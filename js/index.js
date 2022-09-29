//JAVASCRIPT

let sectionProductsMen = document.getElementById("sectionProductsMen");


//RENDERIZA EL CATALOGO EN sectionProductsMen

for (const producto of catalogoHombres) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="../img/${producto.img}" alt="${producto.id}">
                    <p> ${producto.nombre} </p>
                    <b> $ ${producto.precio} </b>
                    <button id="agregar${producto.id}">Agregar al carrito</button>`;
    div.className = "product-block";
    sectionProductsMen.append(div);

    const boton = document.getElementById(`agregar${producto.id}`);
   
    boton.addEventListener('click', ()=> {
        alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
        carritoIndex(producto.id);
        // carritoIndex2(producto.id);

        
/*         localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        carritoStorage.append(`productoCarrito${producto.id}`) */
    })
    
};


const filtrosLeftBar = [
    {id: "RecienLlegados", nombre: "Recien llegados"},
    {id: "CategoriaRemeras", nombre: "Remeras"},
    {id: "CategoriaShorts", nombre: "Shorts"},
    {id: "CategoriaBuzos", nombre: "Buzos"},
    {id: "CategoriaAccesorios", nombre: "Accesorios"},
    {id: "Sale", nombre: "Sale"},
];

//RENDERIZA EL CATALOGO EN sectionProductsMen
for (const filtro of filtrosLeftBar) {
    let li = document.createElement("li");
    if (filtro.nombre === "Sale") {
        li.innerHTML = `
        <button id="btn${filtro.id}" class="left-bar-sale">${filtro.nombre}</button>
        `;
    }else{
        li.innerHTML = `
        <button id="btn${filtro.id}">${filtro.nombre}</button>
        `;
    }
    ulLeftBar.append(li);
};

//ORDENA EL CATALOGO DE MAYOR A MENOR PRECIO
function ordenarMayorMenor() {
    catalogoHombres.sort((a, b) => {
        if(a.precio > b.precio){
           return -1;
        }

        if(a.precio < b.precio){
            return 1;
        }

        return 0;
    }); //ordena de Mayor a Menor

    sectionProductsMen.innerHTML = "";

    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        })
    }
}

let botonMayorMenor = document.getElementById("btnMayorMenor");
botonMayorMenor.addEventListener("click", ordenarMayorMenor);

//ORDENA EL CATALOGO DE MENOR A MAYOR PRECIO

function ordenarMenorMayor() {
    catalogoHombres.sort((a, b) => {
        if(a.precio < b.precio){
            return -1;
        }
        
        if(a.precio > b.precio){
            return 1;
        }
                return 0;
    }); //ordena de Menor a Mayor
        
    sectionProductsMen.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        })
    }
}
        
let botonMenorMayor = document.getElementById("btnMenorMayor");
botonMenorMayor.addEventListener("click", ordenarMenorMayor);    

//ORDENA EL CATALOGO DE A-Z SEGUN NOMBRE DEL PRODUCTO

function ordenarAZ() {
    catalogoHombres.sort((a, b) => {
        if(a.nombre < b.nombre){
            return -1;
        }
        
        if(a.nombre > b.nombre){
            return 1;
        }
                return 0;
    }); //ordena de A a Z
        
    sectionProductsMen.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        })
    }
}
        
let botonAZ = document.getElementById("btnAZ");
botonAZ.addEventListener("click", ordenarAZ);    

//RESETEA FILTRO DE ORDEN

function resetearOrden() {
    catalogoHombres.sort((a, b) => {
        if(a.id < b.id){
            return -1;
        }
        
        if(a.id > b.id){
            return 1;
        }
                return 0;
    }); //ordena de Menor a Mayor segun id.
        
    sectionProductsMen.innerHTML = "";
        
    for (const producto of catalogoHombres) {
        let div = document.createElement("div");
        div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        })
    }
}
        
let botonResetear = document.getElementById("btnResetear");
botonResetear.addEventListener("click", resetearOrden);    

//FILTRO RECIEN LLEGADOS

function filtroRecienLlegados() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.recienLlegado) {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

/*         const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonRecienLlegados = document.getElementById("btnRecienLlegados");
botonRecienLlegados.addEventListener("click", filtroRecienLlegados);    

//FILTRO CATEGORIA REMERAS

function filtroCategoriaRemeras() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.categoria === "Remeras") {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

/*         const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonCategoriaRemeras = document.getElementById("btnCategoriaRemeras");
botonCategoriaRemeras.addEventListener("click", filtroCategoriaRemeras);    

//FILTRO CATEGORIA SHORTS

function filtroCategoriaShorts() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.categoria === "Shorts") {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

/*         const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonCategoriaShorts = document.getElementById("btnCategoriaShorts");
botonCategoriaShorts.addEventListener("click", filtroCategoriaShorts);    

//FILTRO CATEGORIA BUZOS

function filtroCategoriaBuzos() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.categoria === "Buzos") {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

/*         const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonCategoriaBuzos = document.getElementById("btnCategoriaBuzos");
botonCategoriaBuzos.addEventListener("click", filtroCategoriaBuzos);    

//FILTRO CATEGORIA ACCESORIOS

function filtroCategoriaAccesorios() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.categoria === "Accesorios") {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

/*         const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonCategoriaAccesorios = document.getElementById("btnCategoriaAccesorios");
botonCategoriaAccesorios.addEventListener("click", filtroCategoriaAccesorios);    

//FILTRO SALE

function filtroSale() {
    sectionProductsMen.innerHTML = "";
    for (const producto of catalogoHombres) {
        if (producto.sale) {
            let div = document.createElement("div");
            div.innerHTML = `<img src="../img/${producto.img}" alt="producto${producto.id}">
                        <p class="productoNombre"> ${producto.nombre} </p>
                        <p class="productoPrecio"> $ ${producto.precio} </p>
                        <button id="agregar${producto.id}">Agregar</button>`;
        div.className = "product-block";
        sectionProductsMen.append(div);
        };

 /*        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener('click', ()=> {
            // carritoIndex(producto.id);
            alert(`Se agrego el producto ${producto.nombre} al carrito de compras.`);
            localStorage.setItem(`productoCarrito${producto.id}`,JSON.stringify(producto));
        }) */

    }
    
}
        
let botonSale = document.getElementById("btnSale");
botonSale.addEventListener("click", filtroSale);  