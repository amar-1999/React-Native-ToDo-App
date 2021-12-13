import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./screens/TodoList";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name = "Login Screen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name = "TodoList" component={ TodoList } options={{ headerTitleStyle: { color: 'white' }, headerStyle: { backgroundColor: '#4B9E94' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

