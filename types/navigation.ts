import routes from "../navigation/routes";

const { LOGIN, WELCOME, RESET_PASSWORD, WORKER_ONBOARDING } = routes;

export type AuthNavigatorParamList = {
  [LOGIN]: undefined;
  [WELCOME]: undefined;
  [RESET_PASSWORD]: undefined;
};

export type WorkerNavigatorParamList = {
  [WORKER_ONBOARDING]: undefined;
};
