import React, { useEffect, useState, useContext } from "react";
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Button,
} from "react-native";

import { FlatGrid } from "react-native-super-grid";

import { Product } from "../components/Product.js";
import { DirectToCart } from "../components/DirectToCart.js";
import { getProducts } from "../products/ProductsServices.js";

import { CartContext } from "../CartContext";
import { getProduct } from "../products/ProductsServices.js";

export function ProductDetails({ route }) {
    const { productId } = route.params;
    const [product, setProduct] = useState({});

    const { addItemToCart, removeItemToCart } = useContext(CartContext);

    useEffect(() => {
        setProduct(getProduct(productId));
    });

    function onAddToCart() {
        addItemToCart(product.id);
    }

    function onRemoveItem(){
        removeItemToCart(product.id)
    }

    const [products, setProducts] = useState([]);

    function onAddToCartSmall() {
        addItemToCart(products.id);
    }

    useEffect(() => {
        setProducts(getProducts());
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={true}>
                <Image style={styles.image} source={product.image} />

                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>N$ {product.price}</Text>
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                    <TouchableOpacity style={{backgroundColor:'red',padding:10, marginVertical:5}} onPress={onRemoveItem}>
                     <Text style={{color:'#fff', textAlign: "center", fontSize:15, fontWeight: '600'}}>REMOVE</Text>   
                    </TouchableOpacity>
                    <Button onPress={onAddToCart} title="Add to Cart" />
                </View>

                <View style={{padding:15}}>
                <Text style={styles.mDescription}>
                        Discover More
                    </Text></View>

                <ScrollView
                    horizontal={true}
                    style={styles.moreInfoContainer}
                >
                    <View style={[styles.productsList]}>
                    
                        {products.map((item, id) => {
                            return (
                                <TouchableOpacity style={{ width: "20%",margin:5, paddingRight: 10 }} onPress={onAddToCart}>
                                    <DirectToCart
                                        key={id.id}
                                        {...item}
                                        // onPress={() => {
                                        //     navigation.navigate(
                                        //         "ProductDetails",
                                        //         {
                                        //             productIdRoute: item.id,
                                        //         }
                                        //     );
                                        // }}
                                        // onPress={onAddToCartSmall}
                                    />
                                    {/* <Button
                                        onPress={onAddToCartSmall}
                                        title="Add to Cart"
                                    /> */}
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: "100%",
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: "#787878",
        marginBottom: 8,
    },
    mDescription: {
        fontSize: 20,
        fontWeight: "700",
        color: "#787878",
    },
    moreInfoContainer: {
        flexDirection: "row",
        // flexWrap:'wrap',
        width: "100%",
        // height: 430,
        padding: 15,
        // backgroundColor: "#000000",
    },
    productsList: {
        flexDirection: "row",
        // flexWrap: "wrap",
    },
});
