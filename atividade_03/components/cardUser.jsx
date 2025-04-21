import { Avatar } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";

const CardUser = ({
  username,
  description,
  visualization,
  countMessages,
  userImg = "https://thispersondoesnotexist.com/",
  isRead = false,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        backgroundColor: isRead ? "#f5f5f5" : "white",
        padding: 10,
        borderRadius: 10,
        width: "100%",
      }}
    >
      <Avatar size="large" source={{ uri: userImg }} />{" "}
      <View style={{ gap: 5, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            {username}
          </Text>

          {countMessages && (
            <Text
              style={{
                width: 24,
                height: 24,
                borderRadius: 16,
                backgroundColor: "#3f60a0",
                color: "white",
                textAlign: "center",
                lineHeight: 28,
              }}
            >
              {countMessages}
            </Text>
          )}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "300", color: "black" }}>
            {description}
          </Text>

          <Text style={{ fontWeight: "100" }}>{visualization}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CardUser;
