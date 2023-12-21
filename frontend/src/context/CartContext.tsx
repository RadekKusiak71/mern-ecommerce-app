import React, { createContext, ReactNode, useState } from 'react';

interface CartItem {
    productId: string
    name: string
    productImage: string
    price: number
    size: string
    quantity: number
}

interface CartContextType {
    cart: CartItem[] | null;
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: string, productSize: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[] | null>(
        JSON.parse(localStorage.getItem('products') || 'null')
    );

    const updateCart = (newCart: CartItem[] | null) => {
        console.log(newCart);
        setCart(newCart);
        localStorage.setItem('products', JSON.stringify(newCart));
    };

    const addToCart = (product: CartItem) => {
        if (!cart) {
            if (product.size === '') {
                product.size = 'S'
            }
            updateCart([product]);
        } else {
            const existingProduct = cart.find((item) => item.productId === product.productId && item.size === product.size);

            if (existingProduct) {
                existingProduct.quantity += 1;
                updateCart([...cart]);
            } else {
                if (!product.size) {
                    product.size = 'S'
                }
                updateCart([...cart, { ...product, quantity: 1 }]);
            }
        }
    };

    const removeFromCart = (productId: string, productSize: string) => {
        if (cart) {
            const updatedCart = cart.filter(
                (item) => item.productId !== productId || item.size.toLowerCase() !== productSize.toLowerCase()
            );
            updateCart(updatedCart);
        }
    };


    const contextValue: CartContextType = {
        cart,
        addToCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
