import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/Button";

const ContactRegister = ({ route }) => {
  const {
    users,
    AllContactList,
    setAllContactList,
    contact,
    isUpdate = false,
    loggedUser,
  } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userList, setUserList] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    console.log("all contacts", AllContactList);
  }, [AllContactList]);

  useEffect(() => {
    if (name && email && number) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, email]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  }, [errorMessage]);

  useEffect(() => {
    console.log("contact", contact);

    setEmail(contact?.email);
    setName(contact?.name);
    setNumber(contact?.number);
  }, [contact]);

  const handleSaveContact = () => {
    console.log("AllContactList", AllContactList);
    console.log("loggedUser", loggedUser);
    const updatedList = AllContactList.map((item) => {
      if (item.user === loggedUser) {
        return {
          ...item,
          userContactList: [
            ...item.userContactList,
            {
              name: name,
              number: number,
              email: email,
            },
          ],
        };
      }
      return item;
    });
    console.log("updatedList", updatedList);
    setAllContactList(updatedList);
    navigation.navigate("ContactList", {
      AllContactList: updatedList,
      loggedUser: loggedUser,
    }); // Voltar pra lista
  };
  const handleUpdateContact = (contact) => {
    console.log("contact", contact);

    const updatedList = AllContactList.map((item) => {
      if (item.user === loggedUser) {
        return {
          ...item,
          userContactList: item.userContactList.map((user) => {
            if (user.name === contact.name) {
              return {
                ...user,
                name: name,
                number: number,
                email: email,
              };
            }
            return user;
          }),
        };
      }
      return item;
    });

    setAllContactList(updatedList);
    navigation.navigate("ContactList", {
      AllContactList: updatedList,
      loggedUser: loggedUser,
    });
  };

  const handleDeleteContact = (contact) => {
    console.log("contact", contact);

    const updatedList = AllContactList.map((item) => {
      if (item.user === loggedUser) {
        return {
          ...item,
          userContactList: item.userContactList.filter(
            (user) => user.name !== contact.name
          ),
        };
      }
      return item;
    });

    setAllContactList(updatedList);
    navigation.navigate("ContactList", {
      AllContactList: updatedList,
      loggedUser: loggedUser,
    });
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
          errorMessage={!name ? "Digite seu name corretamente" : null}
          value={name}
        />
        <InputForm
          placeholder={"Email"}
          value={email}
          IconType={"Fontisto"}
          LeftIcon={"email"}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={!email ? "Digite seu email corretamente" : null}
        />
        <InputForm
          placeholder={"Telefone"}
          IconType={"Entypo"}
          LeftIcon={"phone"}
          onChange={(e) => setNumber(e.target.value)}
          errorMessage={!number ? "Digite seu number corretamente" : null}
          value={number}
        />
        {!isUpdate ? (
          <View style={styles.btnContainer}>
            <ButtonForm
              title="Salvar"
              btnBgColor={"#6488ea"}
              onPress={handleSaveContact}
            />
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <ButtonForm
              title="Alterar"
              btnBgColor={"#6488ea"}
              onPress={() => handleUpdateContact(contact)}
            />
            <ButtonForm
              title="Excluir"
              btnBgColor={"#6488ea"}
              onPress={() => handleDeleteContact(contact)}
            />
          </View>
        )}
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

export default ContactRegister;
