import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/Home/Home";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz App" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer><MyStack/></NavigationContainer>
  );
}
