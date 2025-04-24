import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Login from "./src/pages/userForm/login/Login";
import UserRegister from "./src/pages/contacts/userRegister/UserRegister";
import ContactList from "./src/pages/contacts/contactList/ContactList";
import ButtonForm from "./src/components/Button";
import ContactRegister from "./src/pages/contacts/ContactRegister/ContactRegister";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();
const MyStack = ({
  users,
  AllContactList,
  setAllContactList,
  loggedUser,
  setLoggedUser,
}) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        users={users}
        name="Login"
        component={Login}
        initialParams={{ setLoggedUser }}
      />
      <Stack.Screen
        name="Usuario"
        component={UserRegister}
        initialParams={{ loggedUser: loggedUser }}
      />

      <Stack.Screen
        name="ContactList"
        component={ContactList}
        initialParams={{
          loggedUser: loggedUser,
        }}
        options={{
          headerRight: () => (
            <ButtonForm
              title="Custom Button"
              onPress={() =>
                navigation.navigate("ContactRegister", {
                  loggedUser: loggedUser,
                  contact: null,
                  isUpdate: false,
                })
              }
              iconName={"person-add"}
              iconType={"Ionicons"}
              iconPosition={"right"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ContactRegister"
        component={ContactRegister}
        initialParams={{
          loggedUser: loggedUser,
          contact: null,
          isUpdate: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AuthLoading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");

    if (user) {
      navigation.replace("ContactList");
    } else {
      navigation.replace("Login");
    }
  }, []);

  return null;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthLoading">
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ContactRegister" component={ContactRegister} />
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{ title: "Seus Contatos" }}
        />
        <Stack.Screen name="Usuario" component={UserRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
