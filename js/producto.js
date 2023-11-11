let url = 'https://opensheet.elk.sh/1uc0Wv37f1Hum4uXOh4bUERMd00WDZD0ByM77V4stHp4/1';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
const mostrarData = (data) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get('art'))
    const art = searchParams.get('art');
    let encontrado = data.find((producto) => {
        return producto.Art == art
    }
    )
    console.log(encontrado)
    let productos = ''
    productos = `
    <div class="imagenes">
    <div class="container-img" style="background-image:url(${encontrado.Imagen})"></div>
    </div>
    <div class="textos">
        <div class="nom-prod">${encontrado.Producto}</div>
        <div class="marca">Marca: ${encontrado.Marca}</div>
       <!-- <div class="m-pago">Medios de pago</div>-->
        <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <div class="precio">${encontrado.Precio}</div>
        <div class="cantidad">Cantidad: ${encontrado.Cantidad}</div>
        <div data-tooltip="Price:-$20" class="button">
        <div class="button-wrapper">
        <div class="text">Buy Now</div>
            <span class="icon">
            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
        </svg>
    </span>
  </div>
</div>


    </div>
    </div>
    <div class="descripcion">Descripcion
    
    <div class="descripcion_producto">${encontrado.Descripcion}</div>
    </div>`
    document.getElementById('section-products').innerHTML = productos

}
