import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../../services/auth/register";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (name && cpf && password && email) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, cpf, email, password]);

  const handleCreateUser = async () => {
    const user = {
      name: name,
      cpf: cpf,
      email: email,
      password: password,
    };

    const response = await register(user);
    if (response) {
      console.log("Usuario criado:", response);
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <View>
          <UserAvatar LogoSize={100} />
        </View>
        <InputForm
          placeholder={"Nome"}
          LeftIcon={"user"}
          IconType={"feather"}
          onChange={(e) => setName(e.target.value)}
          errorMessage={!name ? "Digite seu nome corretamente" : null}
        />
        <InputForm
          placeholder={"CPF"}
          IconType={"MaterialIcons"}
          LeftIcon={"verified-user"}
          onChange={(e) => setCPF(e.target.value)}
          errorMessage={!cpf ? "Digite seu cpf corretamente" : null}
        />
        <InputForm
          placeholder={"Email"}
          IconType={"Fontisto"}
          LeftIcon={"email"}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={!email ? "Digite seu email corretamente" : null}
        />
        <InputForm
          secureTextEntry={true}
          placeholder={"Senha"}
          IconType={"Entypo"}
          LeftIcon={"lock"}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={!password ? "Digite sua senha corretamente" : null}
        />
        <View style={styles.btnContainer}>
          <ButtonForm
            title="Salvar"
            btnBgColor={"#6488ea"}
            disabled={!isValid}
            onPress={handleCreateUser}
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
    paddingTop: "10rem",
    alignItems: "center",
    minHeight: "100vh",
  },

  btnContainer: {
    gap: "1rem",
    marginTop: "1rem",
  },
});

export default UserRegister;
