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
    gap: "1rem",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 10,
    borderBottomColor: "gray",
  },

  cardText: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },

  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ContactCard;
