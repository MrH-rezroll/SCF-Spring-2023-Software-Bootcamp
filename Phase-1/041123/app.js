let cart = [];

const products = [
    {
        "sku": "01",
        "model": "A",
        "name": "Toaster",
        "manufacturer": "The Toaster Company",
        "msrp": "206.99",
        "quantity": "100"
    },
    {
        "sku": "02",
        "model": "A",
        "name": "Toaster",
        "manufacturer": "The Other Toaster Company",
        "msrp": "205.99",
        "quantity": "100"
    },
    {
        "sku": "05",
        "model": "T",
        "name": "Donky Shoes",
        "manufacturer": "The Pet Company",
        "msrp": "12.99",
        "quantity": "100"
    }
];

async function searchProductsByName(name){
    return await new Promise(function (resolve, reject){
        let foundProducts = [];
        products.forEach(product => {
            if(product.name === name){
                foundProducts.push(product);
            }
        });
        if(foundProducts.length > 0){
            resolve(logProducts(foundProducts));
        }
        else {
            reject(console.log("nothing found"));
        }
    }).catch(error => { console.log(error) });
}

function logProducts(productArray){
    console.log(productArray);
}

async function searchProductsBySku(sku){
    return await new Promise(function (resolve, reject){
        let foundProducts = [];
        products.forEach(product => {
            if(product.sku === sku){
                foundProducts.push(product);
            }
        });
        if(foundProducts.length > 0){
            resolve(logProducts(foundProducts));
        }
        else {
            reject(console.log("nothing found"));
        }
    }).catch(error => { console.log(error) });
}

function addToCart(productIndex){
    cart.push(products[productIndex]);
}

cart.forEach(item => {
    console.log(item.name);
});
addToCart(1);
cart.forEach(item => {
    console.log(item.name);
});
console.log(" ---------------- ");
addToCart(2);
cart.forEach(item => {
    console.log(item.name);
});

//searchProductsByName("Stuff");
//console.log("search started");
