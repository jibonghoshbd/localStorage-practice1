const dispalyLocalStorage = () => {
    const cart = getCart()
    for (const product in cart) {
        dispalyProducts(product)
    }
}

const addItems = () => {
    const nameField = document.getElementById('name-field');
    const productName = nameField.value;
    if (!productName) {
        return;
    }
    // display on the ui 
    dispalyProducts(productName)

    // add to local storage 
    addProductsToCart(productName)

    nameField.value = '';
}

const dispalyProducts = (name) => {
    const products = document.getElementById('products')
    const li = document.createElement('li')
    li.classList.add('list')
    li.innerText = name;
    products.appendChild(li)
}

// getItem local storage 
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
}

const addProductsToCart = name => {
    const cart = getCart()
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

// remove items 
const removeItems = () => {
    document.querySelector('.list').textContent = '';
    localStorage.removeItem('cart')
}


dispalyLocalStorage()