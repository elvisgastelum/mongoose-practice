require('./connection');

const Product = require('./models/Product');

async function saveProduct() {
    const laptop = new Product({
        name: 'laptop',
        description: 'this is a simple description of a normal laptop',
        price: 1399.99
    });

    const documentSaved = await laptop.save();
    console.log(documentSaved);
}

saveProduct()
    .catch(e => console.log(e))
    .then(console.log('Document saved'));