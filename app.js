// Variables
let products = [
    { 
        categoria: 'Yerba', marca: 'Taragui', tamaño: '500 grs', precio: '250',},
    { 
        categoria: 'Azucar', marca: 'Ledezma', tamaño: '1 kgs', precio: '200',},
    { 
        categoria: 'Té', marca: 'Green Hills', tamaño: '50 grs', precio: '190',},
    { 
        categoria: 'Gaseosa', marca: 'Coca Cola', tamaño: '2,25 lts', precio: '300',}
];

// Selectores
let saveButton = $('#guardar');
let productsContainer = $('#mostrarLista');

// Funciones
const init = () => {
    initDatabase();

    products.forEach((product) => {
        printProduct(product);
    });
};

const initDatabase = () => {
    const lsProducts = localStorage.getItem('products');

    if (lsProducts != null) {
        try {
            products = JSON.parse(localStorage.getItem('products'));
        } catch (error) {
            initLocalStorage();
        }
    } else {
        initLocalStorage();
    }
};

const initLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
};

const saveEntity = (product) => {
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
};

const saveProduct = () => {
    const categoria = $('#categoria').val();
    const marca = $('#marca').val();
    const tamaño = $('#tamaño').val();
    const precio = $('#precio').val();

    const product = {
        categoria,
        marca,
        tamaño,
        precio
    };
    
    saveEntity(product);
    clearForm();

    printProduct(product);
};

const clearForm = () => {
    $('#nuevoProducto').trigger('reset');
};

const printProduct = (product) => {
    let row = $('<tr>');

    let categoriaCollumn = $('<th>');
    categoriaCollumn.text(product.categoria);
    row.append(categoriaCollumn);

    let marcaCollumn = $('<th>');
    marcaCollumn.text(product.marca);
    row.append(marcaCollumn);

    let cantidadCollumn = $('<th>');
    cantidadCollumn.text(product.tamaño);
    row.append(cantidadCollumn);

    let precioCollumn = $('<th>');
    precioCollumn.text(product.precio);
    row.append(precioCollumn);

    productsContainer.append(row);
};

//Eventos
saveButton.click((e) => {
    saveProduct();
});

// Inicializar aplicacion
init();
