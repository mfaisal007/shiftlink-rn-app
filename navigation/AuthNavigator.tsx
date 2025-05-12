import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigatorParamList } from "../types/navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
  const { WELCOME, LOGIN, RESET_PASSWORD } = routes;
  return (
    <Stack.Navigator initialRouteName={WELCOME}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
