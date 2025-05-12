import { View, StyleSheet } from "react-native";
import colors from "../palette/colors";
import React from "react";

interface RadioButtonProps {
  isSelected: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ isSelected }) => {
  return (
    <View
      style={[styles.container, isSelected ? styles.containerFilled : null]}
    >
      <View
        style={[
          styles.innerContainer,
          isSelected ? styles.innerContainerFilled : null,
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: "50%",
    borderColor: colors.gray["400"],
    borderWidth: 1,
  },
  containerFilled: {
    borderColor: colors.primary["100"],
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  innerContainerFilled: {
    backgroundColor: colors.primary["100"],
  },
});

export default RadioButton;
