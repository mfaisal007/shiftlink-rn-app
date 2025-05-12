import { NavigationContainer } from "@react-navigation/native";

import ResetPasswordScreen from "./screens/auth/ResetPasswordScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import StepperExample from "./components/Stepper";
import { Screen } from "./components/common";
import colors from "./palette/colors";
import WorkerNavigator from "./navigation/WorkerNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <WorkerNavigator />
    </NavigationContainer>
  );
};

export default App;
