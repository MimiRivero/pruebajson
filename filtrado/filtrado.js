let url= 'https://opensheet.elk.sh/1uc0Wv37f1Hum4uXOh4bUERMd00WDZD0ByM77V4stHp4/1';
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))
const mostrarData = (data) => {
    console.log(data)
   let productos = ''
for(let i=0; i < data.length; i++){
    productos=`
    <div class="products">
        <div class="container-img" style="background-image:url(${data[i].Imagen})"></div> 
        <div class="textos">
            <div class="nom-prod">${data[i].Producto}</div>
            <div class="precio">${data[i].Precio}</div>
            <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
    </div>`
    document.getElementById('section-products').innerHTML += productos
}
}
