import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextProps,
} from "react-native";
import { type ReactNode } from "react";
import colors from "../../palette/colors";

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.gray["600"],
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});

export default AppText;
