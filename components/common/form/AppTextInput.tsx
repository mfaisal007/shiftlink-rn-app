import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  Platform,
} from "react-native";
import { Controller } from "react-hook-form";
import { type ReactNode } from "react";
import colors from "../../../palette/colors";
import AppText from "../AppText";

interface AppTextInputProps extends TextInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  width?: ViewStyle["width"];
  placeholder?: string;
  control?: any;
  name: string;
  error?: string | undefined;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  leftIcon,
  rightIcon,
  width = "100%",
  placeholder = "Type here",
  control,
  name,
  error,
  ...otherProps
}) => {
  const inputBorderColor = error ? colors.danger["dark"] : colors.gray["200"];
  const inputPlaceHolderColor = error
    ? colors.danger["dark"]
    : colors.gray["600"];

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            width: width,
            borderColor: inputBorderColor,
          },
        ]}
      >
        {leftIcon && leftIcon}
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholderTextColor={inputPlaceHolderColor}
              style={[
                styles.textInput,
                Platform.OS === "ios" && { paddingVertical: 10, fontSize: 15 },
              ]}
              placeholder={placeholder}
              {...otherProps}
            />
          )}
        />

        {rightIcon && rightIcon}
      </View>
      {error && <AppText style={styles.errorMessage}>{error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray["50"],
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 12,
    flex: 1,
    fontFamily: "Inter-Regular",
  },
  errorMessage: {
    backgroundColor: colors.danger["soft"],
    color: colors.danger["dark"],
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 7,
    alignSelf: "flex-start",
  },
});

export default AppTextInput;
