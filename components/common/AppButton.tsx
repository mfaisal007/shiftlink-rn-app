import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  StyleProp,
} from "react-native";
import colors from "../../palette/colors";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  btnBackground?: string;
  btnStyleOverride?: StyleProp<ViewStyle>;
  textStyleOverride?: StyleProp<TextStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  btnBackground = colors.black100,
  btnStyleOverride,
  textStyleOverride,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: btnBackground },
        btnStyleOverride,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyleOverride]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },
});

export default AppButton;
