import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, useColorScheme } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import { Product } from "../components/Product.js";
import { getProducts } from "../products/ProductsServices.js";

export function ProductsList({ navigation }) {
    let date = new Date().getHours();

    const dayTime = () => {
        if (date >= 12 && date <= 16) {
            return "Afternoon";
        } else if (date >= 17 && date <= 23) {
            return "Evening";
        } else {
            return "Morning";
        }
    };

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
        <View>
            <View style={styles.timeReader}>
                <Text style={styles.timeReader}>Good {dayTime()}</Text>
            </View>
            <FlatGrid
                itemDimension={150}
                spacing={10}
                style={styles.productsList}
                // contentContainerStyle={styles.productListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderProduct}
            />
        </View>
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
    timeReader: {
        color: "#000000",
        fontSize: 25,
        fontWeight: "bold",
        paddingVertical: 8,
        marginHorizontal: 8,
    },
});
