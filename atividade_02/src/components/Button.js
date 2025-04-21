import React from "react";
import { StyleSheet, View } from "react-native";
import { Button as ButtonElement, Icon } from "react-native-elements";

const ButtonForm = ({
  title,
  btnBgColor,
  onPress,
  disabled = false,
  iconName,
  iconType,
  iconPosition,
}) => {
  return (
    <ButtonElement
      buttonStyle={{
        width: "100%",
        backgroundColor: btnBgColor,
        borderRadius: 0,
      }}
      iconPosition={iconPosition}
      title={title}
      onPress={onPress}
      disabled={disabled}
      icon={
        iconName && iconType ? <Icon name={iconName} type={iconType} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
});

export default ButtonForm;
