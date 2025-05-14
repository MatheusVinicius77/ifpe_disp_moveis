import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import UserAvatar from "./UserAvatar";

const ContactCard = ({ contactName, contactNumber, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.avatarContainer}>
        <UserAvatar LogoSize={50} />
      </View>
      <View style={styles.contactContainer}>
        <Text style={styles.cardText}>{contactName}</Text>
        <Text style={styles.cardText}>{contactNumber}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },

  cardText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
  },

  avatarContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  contactContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default ContactCard;
