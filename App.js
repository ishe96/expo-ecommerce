import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CartProvider } from "./CartContext";
import { ProductsList } from "./screens/ProductsList";
import { ProductDetails } from "./screens/ProductDetails";
import { Cart } from './screens/Cart';
import { CartIcon } from "./components/CartIcon";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <CartProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Products"
                            component={ProductsList}
                            options={({ navigation }) => ({
                                title: "Products",
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => (
                                    <CartIcon navigation={navigation} />
                                ),
                            })}
                        />
                        <Stack.Screen
                            name="ProductDetails"
                            component={ProductDetails}
                            options={({ navigation }) => ({
                                title: "Product Details",
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => (
                                    <CartIcon navigation={navigation} />
                                ),
                            })}
                        />
                        <Stack.Screen
                            name="Cart"
                            component={Cart}
                            options={({ navigation }) => ({
                                title: "My Cart",
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => (
                                    <CartIcon navigation={navigation} />
                                ),
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </CartProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
