import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";
import { UserLogo } from "../../user.png";
const UserAvatar = ({ LogoSize, avatarStyle }) => {
  const logoUrl =
    "https://w7.pngwing.com/pngs/198/381/png-transparent-login-avatar-thumbnail.png";

  return (
    <View style={styles.avatarContainer}>
      <Avatar
        avatarStyle={avatarStyle || styles.logoStyle}
        size={LogoSize}
        containerStyle={avatarStyle}
        rounded
        source={{ uri: logoUrl }}
      ></Avatar>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    marginBottom: "1rem",
  },
});

export default UserAvatar;
