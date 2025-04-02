import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar, Button } from "react-native-elements";

export default function App() {
  const [page, setPage] = React.useState("home");
  const logoUrl =
    "https://w7.pngwing.com/pngs/198/381/png-transparent-login-avatar-thumbnail.png";

  React.useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <View style={styles.container}>
      {page === "home" && (
        <View style={{}}>
          <View style={{ alignItems: "center", marginBottom: "1.5rem" }}>
            <Avatar size={80} rounded source={{ uri: logoUrl }} />
          </View>
          <View>
            <View style={styles.inputWrappers}>
              <label>Email</label>
              <TextInput style={styles.inputText} />
            </View>
            <View style={styles.inputWrappers}>
              <label>Senha</label>
              <TextInput style={styles.inputText} />
            </View>

            <Button style={styles.buttons} title="Logar" color="green" />
            <Button
              onPress={() => setPage("cadastro")}
              style={styles.buttons}
              title="Cadastra-se"
              color="green"
            />
            <Text
              style={{ textAlign: "center", cursor: "pointer" }}
              onPress={() => setPage("forgotPassword")}
            >
              Esqueci minha senha
            </Text>
          </View>
        </View>
      )}
      {page === "cadastro" && (
        <View style={{}}>
          <View style={{ alignItems: "center", marginBottom: "1.5rem" }}>
            <Text style={styles.pageHeader}>Cadastro</Text>
          </View>
          <View>
            <View style={styles.inputWrappers}>
              <label>Nome</label>
              <TextInput style={styles.inputText} />
            </View>
            <View style={styles.inputWrappers}>
              <label>Email</label>
              <TextInput style={styles.inputText} />
            </View>
            <View style={styles.inputWrappers}>
              <label>Senha</label>
              <TextInput style={styles.inputText} />
            </View>

            <Button
              onPress={() => setPage("home")}
              style={styles.buttons}
              title="Cadastrar"
              color="green"
            />
          </View>
        </View>
      )}

      {page === "forgotPassword" && (
        <View style={{}}>
          <View style={{ alignItems: "center", marginBottom: "1.5rem" }}>
            <Text style={styles.pageHeader}>Esqueceu a senha</Text>
          </View>
          <View>
            <View style={styles.inputWrappers}>
              <label>Email</label>
              <TextInput style={styles.inputText} />
            </View>
            <Button
              onPress={() => setPage("home")}
              style={styles.buttons}
              title="Enviar"
              color="green"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCCCC",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
  },

  inputWrappers: {
    flex: 1,
  },

  inputText: {
    backgroundColor: "white",
    marginBottom: "1rem",
    padding: "0.5rem",
  },

  buttons: {
    borderRadius: "3rem",
    marginBottom: "1rem",
    color: "#C6F7D0",
  },

  pageHeader: {
    fontSize: "2rem",
  },
});
