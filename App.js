// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import RandomFoodScreen from "./components/RandomFoodScreen";
import AddFoodScreen from "./components/AddFoodScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RandomFoodScreen" component={RandomFoodScreen} />
        <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}