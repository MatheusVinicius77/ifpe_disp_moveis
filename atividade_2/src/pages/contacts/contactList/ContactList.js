import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import UserAvatar from "../../../components/UserAvatar";
import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-elements";
import ContactCard from "../../../components/contactCard";

const ContactList = ({ route }) => {
  const { AllContactList, setAllContactList, loggedUser } = route.params;
  console.log("all contacts", AllContactList);
  const navigation = useNavigation();
  const handleEditContact = (contact) => {
    console.log("contact", contact);
    navigation.navigate("ContactRegister", {
      AllContactList: AllContactList,
      setAllContactList: setAllContactList,
      isUpdate: true,
      contact: contact,
      loggedUser: loggedUser,
    });
  };

  const loggedUserContacts = AllContactList.find(
    (item) => item.user === loggedUser
  );

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        {loggedUserContacts?.userContactList?.map((user) => (
          <ContactCard
            key={user.name}
            contactName={user.name}
            contactNumber={user.number}
            onPress={() => handleEditContact(user)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  insideContainer: {},

  container: {
    paddingTop: "1rem",
    minHeight: "100vh",
  },
});

export default ContactList;
