import React, { createContext, useState } from "react";

import { getProduct } from "./products/ProductsServices.js";

export const CartContext = createContext();

export function CartProvider(props) {
    const [items, setItems] = useState([]);

    function addItemToCart(id) {
        const product = getProduct(id);

        setItems((prevItems) => {
            const item = prevItems.find((item) => item.id == id);

            if (!item) {
                return [
                    ...prevItems,
                    {
                        id,
                        qty: 1,
                        product,
                        totalPrice: product.price,
                    },
                ];
            } else {
                return prevItems.map((item) => {
                    if (item.id == id) {
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                });
            }
        });
    }

    function removeItemToCart(id) {
        const product = getProduct(id);

        setItems((prevItems) => {
            const item = prevItems.find((item) => item.id == id);

            if (item) {
                return [
                    ...prevItems,
                    {
                        id,
                        qty: -1,
                        product,
                        totalPrice: -product.price,
                    },
                ];
            } 
            else {
                return prevItems.map((item) => {
                    if (item.id == id) {
                        item.qty-1;
                        item.totalPrice -= product.price;
                    }
                    return item;
                });
            }
        });
    }

    function getItemsCount() {
        if (removeItemToCart) {
            return items.reduce((sum, item) => sum + item.qty, 0);
        } else {
            return items.reduce((sum, item) => sum + item.qty, 0);
        }
    }

    function getTotalPrice() {
        if (removeItemToCart) {
            return items.reduce((sum, item) => sum + item.totalPrice, 0);
        } else {
            return items.reduce((sum, item) => sum + item.totalPrice, 0);
        }
    }

    return (
        <CartContext.Provider
            value={{
                items,
                setItems,
                getItemsCount,
                addItemToCart,
                removeItemToCart,
                getTotalPrice,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}
