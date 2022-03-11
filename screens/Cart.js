import React, { useEffect, useState, useContext } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { CartContext } from "../CartContext";

export function Cart({ navigation }) {
    const { items, getItemsCount, removeItemToCart, getTotalPrice } = useContext(CartContext);

    function Totals() {
        let transport = 30;

        let [total, setTotal] = useState(0);

        const deliver = () => {
            if (transport) {
                return total + transport;
            } else {
                return total;
            }
        };

        // function onRemoveItem(){
        //     removeItemToCart(items.price)
        // }

        useEffect(() => {
            setTotal(getTotalPrice());
        });

        return (
            <View>
                <View
                    style={[styles.cartLineTotal, { flexDirection: "column" }]}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: "cyan",
                            borderRadius: 5,
                            width: "30%",
                            textAlign: "center",
                        }}
                        // onPress={onRemoveItem}
                    >
                        <Text
                            style={[
                                styles.lineLeft,
                                styles.lineTotal,
                                { textAlign: "center" },
                            ]}
                        >
                            Delivery
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={[styles.lineLeft, styles.lineTotal]}>
                            Total
                        </Text>
                        <Text style={styles.lineRight}>N$ {total}</Text>
                    </View>
                </View>
                <Text
                    style={{
                        color: "white",
                        backgroundColor: "#2F80ED",
                        width: "70%",
                        padding: 10,
                        alignSelf: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 10,
                    }}
                >
                    Proceed
                </Text>
            </View>
        );
    }

    function renderItem({ item }) {
        return (
            <View style={styles.cartLine}>
                <Text style={styles.lineLeft}>
                    {item.product.name} {item.product.price} x {item.qty}{" "}
                </Text>
                <Text style={styles.lineRight}>N$ {item.totalPrice}</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        />
    );
}

const styles = StyleSheet.create({
    cartLine: {
        flexDirection: "row",
    },
    cartLineTotal: {
        flexDirection: "row",
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
    },
    lineTotal: {
        fontWeight: "bold",
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: "#333333",
    },
    lineRight: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 40,
        color: "#333333",
        textAlign: "right",
    },
    itemsList: {
        backgroundColor: "#eeeeee",
    },
    itemsListContainer: {
        backgroundColor: "#eeeeee",
        paddingVertical: 8,
        marginVertical: 8,
    },
});
