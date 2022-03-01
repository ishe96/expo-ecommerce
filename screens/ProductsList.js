import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Product } from "../components/Product.js";
import { getProducts } from "../products/ProductsServices.js";

export function ProductsList({ navigation }) {
    function renderProduct({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate("ProductDetails", {
                        productId: product.id,
                    });
                }}
            />
        );
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    });

    return (
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
    );
}

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: "#eeeeee",
    },
    productListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});
