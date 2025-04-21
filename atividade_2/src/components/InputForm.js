import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import * as IconModules from "react-native-vector-icons";
const InputForm = ({
  secureTextEntry,
  placeholder,
  LeftIcon,
  IconType,
  onChange,
  errorMessage,
  value,
}) => {
  return (
    <View>
      <Input
        placeholder={placeholder}
        leftIcon={{ type: IconType, name: LeftIcon }}
        errorStyle={{ color: "red" }}
        secureTextEntry={secureTextEntry}
        onChange={onChange}
        errorMessage={errorMessage}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputForm;
