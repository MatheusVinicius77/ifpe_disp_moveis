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
        initialParams={{ users: users.current, setLoggedUser }}
      />
      <Stack.Screen
        name="Usuario"
        component={UserRegister}
        initialParams={{ users: users.current, loggedUser: loggedUser }}
      />

      <Stack.Screen
        name="ContactList"
        component={ContactList}
        initialParams={{
          users: users.current,
          AllContactList: AllContactList,
          setAllContactList: setAllContactList,
          loggedUser: loggedUser,
        }}
        options={{
          headerRight: () => (
            <ButtonForm
              title="Custom Button"
              onPress={() =>
                navigation.navigate("ContactRegister", {
                  users: users.current,
                  AllContactList: AllContactList,
                  setAllContactList: setAllContactList,
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
          users: users.current,
          AllContactList: AllContactList,
          setAllContactList: setAllContactList,
          loggedUser: loggedUser,
          contact: null,
          isUpdate: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const users = useRef([
    {
      cpf: "123",
      email: "123",
      name: "matheus",
      password: "321",
    },
    {
      cpf: "123",
      email: "123",
      name: "1",
      password: "1",
    },
  ]);
  const [AllContactList, setAllContactList] = useState([
    {
      user: "matheus",
      userContactList: [
        {
          cpf: "123",
          email: "123",
          name: "vinicius",
          password: "321",
          number: "814244444",
        },
        {
          cpf: "123",
          email: "123",
          name: "1",
          password: "1",
          number: "822222222",
        },
      ],
    },
    {
      user: "1",
      userContactList: [
        {
          cpf: "123",
          email: "123",
          name: "vinicius",
          password: "321",
          number: "814244444",
        },
      ],
    },
  ]);

  const [loggedUser, setLoggedUser] = useState({});

  return (
    <NavigationContainer>
      <MyStack
        users={users}
        AllContactList={AllContactList}
        setAllContactList={setAllContactList}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
