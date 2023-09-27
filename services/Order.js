import { getProdcutById } from "./Menu.js";

export async function addToCart(id) {
    const product = await getProdcutById(id);
    const results = app.store.cart.filter(
        prodInCart => prodInCart.product.id == id)

        if(results.length == 1){
            // product in cart
            // update it
            app.store.cart = app.store.cart.map( 
                prod => prod.product.id == id 
                ? { ...prod, quantity: prod.quantity+1 } : prod
            )
        } else {
            app.store.cart = [...app.store.cart, {product, quantity: 1}];
        }
}

export function removeFromCart(id) {
    app.store.cart = app.store.cart.filter(p => p.product.id != id)
}