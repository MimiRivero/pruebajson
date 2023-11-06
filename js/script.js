
async function populate() {

  const requestURL = 'https://mimirivero.github.io/pruebajson/json/productos.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeroes(superHeroes);
}
function populateHeroes(obj) {
  const container_products = document.querySelector('.container-products');
  const categorias = obj.productos;
  for (const categoria of categorias) {
    const div = document.createElement('div');
    div.classList.add('card-product');
    const div_imagen = document.createElement('div');
    div_imagen.classList.add('container-img');
    div_product = document.createElement('div');
    div_product.classList.add('content-card-product');
    div_stars = document.createElement('div');
    div_stars.classList.add('stars');
    i_star = document.createElement('i');
    i_star.classList.add('fa-solid');
    i_star.classList.add('fa-star');
    h3_nombre = document.createElement('h3');
    h3_nombre.classList.add('nombre-producto');
    h3_nombre.textContent = ` ${categoria.Producto}`;
    span_carrito = document.createElement('span')
    span_carrito.classList.add('add-cart')
    i_carrito = document.createElement('i');
    i_carrito.classList.add('fa-solid');
    i_carrito.classList.add('fa-basket-shopping');
    p_precio = document.createElement('p');
    p_precio.classList.add('price');
    p_precio.textContent = ` ${categoria.Precio}`;
    const crear = document.createElement('img');
    const imagen = `${categoria.imagen}`;
    crear.src = imagen;

    container_products.appendChild(div);
    div.appendChild(div_imagen);
    div_imagen.appendChild(crear);
    div.appendChild(div_product);
    div_product.appendChild(div_stars);
    div_stars.appendChild(i_star);
    div_product.appendChild(h3_nombre);
    div_product.appendChild(span_carrito);
    span_carrito.appendChild(i_carrito);
    div_product.appendChild(p_precio);
  }
}

populate();

