    let url= 'https://opensheet.elk.sh/1uc0Wv37f1Hum4uXOh4bUERMd00WDZD0ByM77V4stHp4/1';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
       let productos = ''
    for(let i=0; i < data.length; i++){
        productos+=`<div class="container-products">
        <div class="card-product">
            <div class="container-img">
                <img src="${data[i].imagen}" alt="">
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <h3 class="nombre-producto">${data[i].Producto}</h3>
                <span class="add-cart">
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>
                <p class="price">${data[i].Precio}</p>
            </div>
        </div>`
        document.getElementById('container-products').innerHTML = productos
    }
    }
