class ProductManager {
    constructor() {
        this.products = {};
        this.lastId = 0;
    }

    // Método para obtener todos los productos
    getProducts() {
        return Object.values(this.products);
    }

    // Método para agregar un producto
    addProduct(product) {
        // Comprobamos si el código del producto ya existe
        if (this.products[product.code]) {
            throw new Error('El código del producto ya está en uso.');
        }

        // Generamos un ID único para el producto y lo agregamos al objeto de productos
        const id = ++this.lastId;
        const newProduct = {
            ...product,
            id
        };
        this.products[product.code] = newProduct;
        return newProduct;
    }

    // Método para obtener un producto por su ID
    getProductById(id) {
        const product = Object.values(this.products).find(p => p.id === id);
        if (!product) {
            throw new Error('No se encontró el producto.');
        }
        return product;
    }
}

// Crear instancia de ProductManager
const productManager = new ProductManager();

// Obtener productos (debe ser un arreglo vacío)
console.log(productManager.getProducts()); // []

// Se agrega producto de prueba
try {
    const newProduct = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25,
    };
    productManager.addProduct(newProduct);
    console.log('Producto agregado:', newProduct);
} catch (error) {
    console.error('Error al agregar el producto:', error.message);
}

console.log(productManager.getProducts());

// Se agrega otro producto de prueba
try {
    const newProduct = {
        title: 'producto prueba 2',
        description: 'Este es un producto prueba 2',
        price: 250,
        thumbnail: 'Sin imagen',
        code: 'abc1234',
        stock: 15,
    };
    productManager.addProduct(newProduct);
    console.log('Producto agregado:', newProduct);
} catch (error) {
    console.error('Error al agregar el producto:', error.message);
}

console.log(productManager.getProducts());

// Se agrega un producto de prueba con el mismo id del primero (da error)
try {
    const repeatedProduct = {
        title: 'producto repetido',
        description: 'Este es un producto repetido',
        price: 300,
        thumbnail: 'Sin imagen',
        code: 'abc123', // Código repetido
        stock: 10,
    };
    productManager.addProduct(repeatedProduct);
    console.log('Producto repetido agregado:', repeatedProduct);
} catch (error) {
    console.error('Error al agregar el producto repetido:', error.message);
}

console.log(productManager.getProducts());

// Obtener un producto por su ID (debe arrojar un error porque no existe)
try {
    const productId = 999;
    const product = productManager.getProductById(productId);
    console.log('Producto encontrado por ID:', product);
} catch (error) {
    console.error('Error al obtener el producto por ID:', error.message);
}