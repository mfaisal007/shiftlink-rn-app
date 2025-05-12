import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkerNavigatorParamList } from "../types/navigation";
import WorkerOnBoardingScreen from "../screens/worker/WorkerOnBoardingScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator<WorkerNavigatorParamList>();

const AuthNavigator = () => {
  const { WORKER_ONBOARDING } = routes;
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={WORKER_ONBOARDING}
        component={WorkerOnBoardingScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
