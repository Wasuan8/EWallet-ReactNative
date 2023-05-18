import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp } from "./screens";

import Tabs from "./navigation/tabs";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },

};

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer >
      <StatusBar
        backgroundColor="#00BA63"
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName='SignUp'
        screenOption={{
          headerShown: false,
        }}
        screenOptions={{ headerMode: 'none' }}
      >

        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />



      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default App;