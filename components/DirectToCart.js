import React, { useEffect, useState, useContext } from "react";
import {
    ScrollView,
    Text,
    Image,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import { CartContext } from "../CartContext.js";
import { getProducts, getProduct } from "../products/ProductsServices.js";

export function DirectToCart({id, name, price, image }) {
    // const {productIdRoute} = route.params;
    // const [product, setProduct] = useState([])

    // const { addItemToCart } = useContext(CartContext);

    // useEffect(() => {
    //     setProduct(getProduct(productIdRoute))
    // })

    // function onAddToCart(){
    //     addItemToCart(product.id)
    // }

    return (
        // <ScrollView showsHorizontalScrollIndicator={true}>
        <>
            <View style={styles.card} keyExtractor={id}>
                <Image style={styles.thumb} source={image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>N$ {price}</Text>
                </View>
            </View>
            {/* <Button
                onPress={alert(`${name}`)}
                onPress={onAddToCart}
                title="Add to Cart"
            /> */}
        </>
        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: "black",
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        // marginTop: 10,
    },
    thumb: {
        height: 260,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: "100%",
    },
    infoContainer: {
        // padding: 16,
    },
    name: {
        // fontSize: 22,
        fontWeight: "bold",
    },
    price: {
        // fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
});
