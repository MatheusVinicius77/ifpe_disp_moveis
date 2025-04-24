import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/Button";
import {
  addContact,
  getUserContactList,
} from "../../../services/contacts/contactList";

const ContactRegister = ({ route }) => {
  const { contact = null, isUpdate = false } = route.params;
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [AllContactList, setAllContactList] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const loggedUserData = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUserData) {
      setLoggedUser(loggedUserData);
    }
  }, []);
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
    setEmail(contact?.email);
    setname(contact?.name);
    setNumber(contact?.number);
  }, [contact]);

  useEffect(() => {
    const fetchLoggedUserContactList = async () => {
      if (!loggedUser) return;
      try {
        const response = await getUserContactList(loggedUser.id);
        setAllContactList(response);
      } catch (error) {
        console.error("Erro ao buscar contactList:", error);
      }
    };

    fetchLoggedUserContactList();
  }, [loggedUser]);

  useEffect(() => {
    console.log("AllContactList", AllContactList);
  }, [AllContactList]);

  const handleSaveContact = async (userId) => {
    if (!AllContactList || !number || !email) return;

    const updatedList = {
      ...AllContactList,
      contactList: [
        ...AllContactList.contactList,
        {
          name: name,
          number: number,
          email: email,
        },
      ],
    };

    console.log("updatedList", updatedList);
    await addContact(updatedList.id, updatedList);
    setAllContactList(updatedList);
    navigation.navigate("ContactList", {
      AllContactList: updatedList,
      loggedUser: loggedUser,
    });
  };
  const handleUpdateContact = async (contact) => {
    if (!AllContactList || !AllContactList.contactList) return;

    const updatedContacts = AllContactList.contactList.map((item) => {
      if (item.name === contact.name) {
        return {
          ...item,
          name: name,
          number: number,
          email: email,
        };
      }
      return item;
    });

    const updatedList = {
      ...AllContactList,
      contactList: updatedContacts,
    };

    console.log("updatedList", updatedList);
    await addContact(updatedList.id, updatedList);
    setAllContactList(updatedList);
    navigation.navigate("ContactList", {
      AllContactList: updatedList,
      loggedUser: loggedUser,
    });
  };

  const handleDeleteContact = async (contact) => {
    if (!AllContactList || !AllContactList.contactList) return;

    const updatedContacts = AllContactList.contactList.filter(
      (user) => user.name !== contact.name
    );

    const updatedList = {
      ...AllContactList,
      contactList: updatedContacts,
    };

    console.log("updatedList", updatedList);
    await addContact(updatedList.id, updatedList);
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
          onChange={(e) => setname(e.target.value)}
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
