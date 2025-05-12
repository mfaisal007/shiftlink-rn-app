import { Image, View, StyleSheet } from "react-native";
import { AppButton, AppText, Screen } from "../components/common";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import colors from "../palette/colors";
import { AuthNavigatorParamList } from "../types/navigation";

interface WelcomeScreenProps
  extends NativeStackScreenProps<AuthNavigatorParamList, "Welcome"> {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/shift-link-logo-lg.png")}
          />
        </View>
        <View style={styles.welcomeImageContainer}>
          <Image
            style={styles.welcomeImage}
            source={require("../assets/images/welcome-2x.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.welcomeTextAndActionContainer}>
          <AppText style={styles.welcomePrimaryText}>Join Shift Link</AppText>
          <AppText style={styles.welcomeSecondaryText}>
            Create an account to manage shifts, compliance, and payroll
            seamlessly.
          </AppText>
          <AppButton
            title="Log In"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 44,
  },
  welcomeImageContainer: {
    flex: 3,
  },
  welcomeImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  welcomeTextAndActionContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  welcomePrimaryText: {
    color: colors.black100,
    fontSize: 24,
    fontFamily: "Inter-Bold",
    marginBottom: 20,
  },
  welcomeSecondaryText: {
    fontSize: 14,
  },
});

export default WelcomeScreen;
