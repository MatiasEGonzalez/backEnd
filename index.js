/* 

  -----------------------------

  Caracteristicas del desafio 1:

  -----------------------------

  ### Consigna:
  
  Realizar una clase “ProductManager” que gestione un conjunto de productos. ✅


  ### Aspectos a incluir:
  
  - Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío. ✅

  - Cada producto que gestione debe contar con las propiedades: ✅
    * title (nombre del producto)
    * description (descripción del producto)
    * price (precio)
    * thumbnail (ruta de imagen)
    * code (código identificador)
    * stock (número de piezas disponibles)


  - Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial. ✅
    * Validar que no se repita el campo “code” y que todos los campos sean obligatorios ✅
    * Al agregarlo, debe crearse con un id autoincrementable ✅

  - Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

  - Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id ✅
    * En caso de no coincidir ningún id, mostrar en consola un error “Not found”


*/

function* generateId() {
  let id = 1;
  while (true)
    yield id++;
}

let generator = generateId();

class Products {
  code = generator.next().value
  constructor({
    title,
    description,
    price,
    thumbnail,
    stock = 0,
  }) {
    this.code
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail = thumbnail
    this.stock = stock
  }
}


class ProductManager {
  #productList = []
  constructor() {
    this.#productList
  }

  get products() {
    console.log(this.#productList)
    return this.#productList
  }

  set products(value) {
    console.log('[Error]: No es posible editar la lista de products')
    console.log('Para agregar productos use la funcion "addProducts"')
    console.log('Para resetar la lista use la funcion "resetProducts"')
    return
  }

  validateData({
    title,
    description,
    price,
    thumbnail,
    stock
  }) {
    const stringsValid =
      typeof (title) === 'string'
      && typeof (description) === 'string'
      && typeof (thumbnail) === 'string'

    const priceValid = typeof (price) === 'number'

    const stockValid =
      typeof (stock) === 'number'
      || typeof (stock) === 'undefined'

    return stringsValid && priceValid && stockValid
  }

  addProduct({
    title,
    description,
    price,
    thumbnail,
    stock,
  }) {
    const validate = this.validateData({
      title,
      description,
      price,
      thumbnail,
      stock
    })
    if (!validate) {
      console.log('[Error]: Los datos ingresados son incorrectos, revise los datos e intente de nuevo')
      return
    }

    this.#productList.push(
      new Products(
        title,
        description,
        price,
        thumbnail,
        stock
      )
    )
  }

  resetProducts() {
    this.#productList = []
    return 'Se ha resetado la lista de products'
  }

  getProductById(id) {
    let searchedItem = this.#productList.filter((item) => item.code === id)
    if (searchedItem.length === 0) {
      console.log('[Error 404]: Product Not Found')
      return // el return es para que no me devuelva el array vacio
    }
    console.log(searchedItem)
  }
}

const PM = new ProductManager

PM.addProduct({
  title: 'titulo',
  description: 'description',
  price: 35,
  thumbnail: 'thumbnail',
  stock: 0,
})

PM.addProduct({
  title: 'titulo 2',
  description: 'description 2',
  price: 0,
  thumbnail: 'thumbnail 2',
})

// PM.products = [] // Esto no funcionara, la variable productList es privada y solo se puede acceder con

// PM.products // Devuelve todos los productos de la lista


// ===== Funciones de ProductManager =====

/*
  1 - addProduct
    addProduct agregara productos siempre y cuando cumpla con algunas validaciones minimas
      * title debe ser string
      * description debe ser string
      * thumbnail debe ser string
      * price debe ser number o undefined
      * stock debe ser number o undefined
*/


// PM.addProduct({
//   title: 'titulo',
//   description: 'description',
//   price: 35,
//   thumbnail: 'thumbnail',
//   stock: 0,
// }) 


// 2 - resetProducts
// Como su nombre lo indica, resetea la lista a un array vacio []

// PM.resetProducts()


// 3 - getProductById
// Como su nombre lo indica, buscara productos segun un identificador numerico

// PM.getProductById(1)