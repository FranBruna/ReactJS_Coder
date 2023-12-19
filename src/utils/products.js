const productos = [
  {
    id: 1,
    title: "Agarra Cortinas flor",
    description: "Flor tejida a crochet con hilo de algodon de excelente calidad",
    stock: 10,
    type: "Agarra Cortinas",
    imageProduct: {
      firtsImage: "https://i.pinimg.com/474x/52/cf/22/52cf220ae9d3b7cc14f9654b5df4aa1e.jpg",
      secondImage: "https://i.pinimg.com/474x/75/b3/c4/75b3c456e03bd27b373ecd44a5055f11.jpg",
    },
    price: 10000,
  },

  {
    id: 2,
    title: "Atrapa sueños",
    description:
      "El atrapasueños puede colocarse como elemento decorativo casi en cualquier parte de la casa. Sin embargo, este amuleto está pensado para salvaguardar nuestros sueños y alejar las malas vibraciones",
    stock: 7,
    type: "Atrapa Sueños",
    imageProduct: {
      firtsImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRContHX_fJiKvuhMpdspoB3AyJIYfCZ8yVr1dZHynMrCEbaIvjpXglWk-tr-VR8nvNghU&usqp=CAU",
      secondImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsar76pk4l_x1uObznV8u8cipHKWB5G0277Q&usqp=CAU",
    },
    price: 8000,
  },

  {
    id: 3,
    title: "Lampara Colgante Premium",
    description:
      "Esta lampara esta confeccionada de manera artesanal por nuestra manos con hilo de yute natural. Con una estructura de hierro negro y un tejido realizado con técnicas tradicionales de la cestería, otorga carácter a la iluminación interior tanto como exterior gracias al matiz de luz de su diseño entrelazado ",
    stock: 20,
    type: "Lamparas",
    imageProduct: {
      firtsImage: "https://http2.mlstatic.com/D_NQ_NP_2X_632681-MLA70650479233_072023-F.webp",
      secondImage:
        "https://acdn.mitiendanube.com/stores/001/132/800/products/lampara-yute-tejida1-591a23cedd11c3a3dc15862229607520-1024-1024.jpg",
    },
    price: 20000,
  },

  {
    id: 4,
    title: "Tapiz macrame decorativo",
    description:
      "Tapiz Amapola tejido en macramé con hilos de algodón, teñido artesanal en color vicuña-gris perla.",
    stock: 6,
    type: "Tapiz",
    imageProduct: {
      firtsImage: "https://m.media-amazon.com/images/I/51YDvjUGaLL._AC_UF894,1000_QL80_.jpg",
      secondImage: "https://http2.mlstatic.com/D_NQ_NP_2X_908243-MLA54699221190_032023-F.webp",
    },
    price: 50000,
  },
  {
    id: 5,
    title: "Almohadon Redo",
    description:
      "El atrapasueños puede colocarse como elemento decorativo casi en cualquier parte de la casa. Sin embargo, este amuleto está pensado para salvaguardar nuestros sueños y alejar las malas vibraciones",
    stock: 7,
    type: "Almohadones",
    imageProduct: {
      firtsImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRContHX_fJiKvuhMpdspoB3AyJIYfCZ8yVr1dZHynMrCEbaIvjpXglWk-tr-VR8nvNghU&usqp=CAU",
      secondImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsar76pk4l_x1uObznV8u8cipHKWB5G0277Q&usqp=CAU",
    },
    price: 8000,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      resolve(productoFiltrado);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter((prod) => prod.type === category);
      resolve(productosFiltrados);
    }, 2000);
  });
};
export default productos;
