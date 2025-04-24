import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import { RiLockPasswordLine } from "react-icons/ri";
import ButtonForm from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import all_users from "../../../services/auth/login";
import { getUserContactList } from "../../../services/contacts/contactList";
const Login = ({ route }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await all_users();
      setUsers(response);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (name && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, password]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  }, [errorMessage]);

  const handleNavigateLogin = async () => {
    if (!users) return;
    const user = users.filter(
      (user) => user?.name === name && user.password === password
    );

    const userId = user[0]?.id;
    const userContactList = await getUserContactList(userId);
    const loggedUser = {
      id: user[0]?.id,
      name: user[0]?.name,
      email: user[0]?.email,
      contactList: userContactList.contactList[0],
    };
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    if (user.length) {
      console.log("Usuario logou:", user);
      navigation.navigate("ContactList");
    } else {
      setErrorMessage("Login Inválido");
    }
  };

  const handleNavigateRegister = () => {
    navigation.navigate("Usuario", { users: users });
  };
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <View>
          <UserAvatar LogoSize={100} />
        </View>
        <InputForm
          placeholder={"Login"}
          LeftIcon={"user"}
          IconType={"feather"}
          onChange={(e) => setName(e.target.value)}
          errorMessage={errorMessage}
        />
        <InputForm
          secureTextEntry={true}
          placeholder={"Senha"}
          IconType={"Entypo"}
          LeftIcon={"lock"}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errorMessage}
        />
        <View style={styles.btnContainer}>
          <ButtonForm
            title="Login"
            btnBgColor={"#6488ea"}
            onPress={
              isValid
                ? handleNavigateLogin
                : () => setErrorMessage("Preencha todos os campos corretamente")
            }
          />
          <ButtonForm
            title="Cadastre-se"
            btnBgColor={"#ff0000"}
            onPress={handleNavigateRegister}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  insideContainer: {
    maxWidth: "80%",
  },

  container: {
    paddingTop: "13rem",
    alignItems: "center",
    minHeight: "100vh",
  },

  btnContainer: {
    gap: "1rem",
    marginTop: "1rem",
  },
});

export default Login;
