import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";
import ContactCard from "../../../components/contactCard";
import { getUserContactList } from "../../../services/contacts/contactList";
import { Button } from "react-native-web";

const ContactList = () => {
  const [AllContactList, setAllContactList] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    const payload = JSON.parse(localStorage.getItem("loggedUser"));
    console.log("Logged user:", payload);
    setLoggedUser(payload);
  }, []);

  useEffect(() => {
    const fetchContactList = async () => {
      if (!loggedUser || !loggedUser.id) return;
      const response = await getUserContactList(loggedUser.id);
      console.log("Resposta da API:", response);
      setAllContactList(response);
    };

    if (loggedUser) {
      fetchContactList();
    }
  }, [loggedUser]);

  const handleEditContact = (contact) => {
    navigation.navigate("ContactRegister", {
      isUpdate: true,
      contact: contact,
      loggedUser: loggedUser,
    });
  };

  const handleAddContact = () => {
    navigation.navigate("ContactRegister", {
      isUpdate: false,
      loggedUser: loggedUser,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigation.replace("Login");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingRight: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.logoutContainer}>
              <Button
                title="Adicionar"
                color="blue"
                onPress={handleAddContact}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.logoutContainer}>
            <Button title="Sair" color="#ff5c5c" onPress={handleLogout} />
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        {AllContactList &&
        AllContactList.contactList &&
        AllContactList.contactList.length > 0 ? (
          AllContactList.contactList.map((user, index) => (
            <ContactCard
              key={index}
              contactName={user.name}
              contactNumber={user.number}
              onPress={() => handleEditContact(user)}
            />
          ))
        ) : (
          <Text>No contacts available</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  insideContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  logoutContainer: {
    alignSelf: "flex-end",
  },
});

export default ContactList;
