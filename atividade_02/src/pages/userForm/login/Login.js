import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import { RiLockPasswordLine } from "react-icons/ri";
import ButtonForm from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
const Login = ({ route }) => {
  const { users, userContactList, setLoggedUser } = route.params;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigation = useNavigation();

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

  const handleNavigateLogin = () => {
    console.log("all users:", users);
    const user = users.filter(
      (user) => user?.name === name && user.password === password
    );
    if (user.length) {
      console.log("Usuario logou:", user);
      setLoggedUser(user[0].name);
      navigation.navigate("ContactList", {
        userContactList: userContactList,
        loggedUser: user[0].name,
      });
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
