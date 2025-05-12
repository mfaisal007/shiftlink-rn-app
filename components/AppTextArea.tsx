import { View } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import colors from "../palette/colors";

const AppTextArea = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={colors.gray["600"]}
        multiline={true}
        numberOfLines={10}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray["300"],
    borderRadius: 8,
    paddingHorizontal: 6,
    backgroundColor: colors.gray["50"],
  },
  input: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default AppTextArea;
