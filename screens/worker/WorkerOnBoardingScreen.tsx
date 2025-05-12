import { View, Image, StyleSheet } from "react-native";
import React, { useState, type ReactNode } from "react";
import {
  UserCircleIcon as UserCircleIconOutline,
  UserIcon as UserIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  DevicePhoneMobileIcon as DevicePhoneMobileIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  IdentificationIcon as IdentificationIconOutline,
  DocumentDuplicateIcon as DocumentDuplicateIconOutline,
  DocumentIcon as DocumentIconOutline,
  HeartIcon as HeartIconOutline,
  ShieldExclamationIcon as SheildExclamationIconOutline,
} from "react-native-heroicons/outline";
import { AppButton, Screen } from "../../components/common";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WorkerNavigatorParamList } from "../../types/navigation";
import WorkerOnBoardingProgressInfo from "../../components/worker/WorkerOnBoardingProgressInfo";
import colors from "../../palette/colors";
import ProgressBar from "../../components/ProgressBar";
import Role from "../../components/worker/Role";
import PersonalDetails from "../../components/worker/PersonalDetails";
import WorkHistoryAndReference from "../../components/worker/WorkHistoryAndReference";
import EmergencyContactDetails from "../../components/worker/EmergencyContactDetails";
import BankingDetails from "../../components/worker/BankingDetails";
import RightToWork from "../../components/worker/RightToWork";
import DocumentsUpload from "../../components/worker/DocumentsUpload";
import DrivingLicenseDetails from "../../components/worker/DrivingLicenseDetails";
import MedicalHistory from "../../components/worker/MedicalHistory";
import Declarations from "../../components/worker/Declarations";
import ReviewYourInfo from "../../components/worker/ReviewYourInfo";
import StepperExample from "../../components/Stepper";

interface WorkerOnBoardingScreenProps
  extends NativeStackScreenProps<
    WorkerNavigatorParamList,
    "WorkerOnBoarding"
  > {}

const WorkerOnBoardingScreen: React.FC<WorkerOnBoardingScreenProps> = ({
  navigation,
}) => {
  const currentStep: number = 3;
  const totalSteps: number = 10;
  const progressPercentage = (currentStep / totalSteps) * 100;
  const [open, setOpen] = useState(false);

  let stepTitle: string;
  let stepIcon: ReactNode;

  const step: (() => ReactNode)[] = [
    Role,
    PersonalDetails,
    WorkHistoryAndReference,
    EmergencyContactDetails,
  ];

  switch (currentStep) {
    case 1:
      stepTitle = "Role";
      stepIcon = <UserCircleIconOutline color={colors.white} />;
      break;
    case 2:
      stepTitle = "Personal Details";
      stepIcon = <UserIconOutline color={colors.white} />;
      break;
    case 3:
      stepTitle = "Work History & Reference";
      stepIcon = <ClipboardDocumentListIconOutline color={colors.white} />;
      break;
    case 4:
      stepTitle = "Emergency Contact Details";
      stepIcon = <DevicePhoneMobileIconOutline color={colors.white} />;
      break;
    case 5:
      stepTitle = "Banking Details";
      stepIcon = <BanknotesIconOutline color={colors.white} />;
      break;
    case 6:
      stepTitle = "Right To Work";
      stepIcon = <IdentificationIconOutline color={colors.white} />;
      break;
    case 7:
      stepTitle = "Documents Upload";
      stepIcon = <DocumentDuplicateIconOutline color={colors.white} />;
      break;
    case 8:
      stepTitle = "Driving License Details";
      stepIcon = <DocumentIconOutline color={colors.white} />;
      break;
    case 9:
      stepTitle = "Medical History";
      stepIcon = <HeartIconOutline color={colors.white} />;
      break;
    default:
      stepTitle = "Declarations";
      stepIcon = <SheildExclamationIconOutline color={colors.white} />;
  }

  return (
    <Screen style={styles.screen}>
      <View>
        <View>
          <View
            onTouchStart={() => setOpen(!open)}
            style={styles.logoContainer}
          >
            <Image
              style={styles.logo}
              source={require("../../assets/images/shift-link-logo-lg.png")}
              resizeMode="cover"
            />
          </View>
          <WorkerOnBoardingProgressInfo
            currentStep={currentStep}
            stepIcon={stepIcon}
            stepTitle={stepTitle}
          />
          <ProgressBar progressPercentage={progressPercentage} />
        </View>
      </View>
      <View style={styles.container}>
        <ReviewYourInfo />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          gap: 10,
          paddingHorizontal: 10,
        }}
      >
        <AppButton
          btnStyleOverride={{ width: "auto", paddingHorizontal: 30 }}
          title="Back"
          onPress={() => {}}
        />
        <AppButton
          btnStyleOverride={{ width: "auto", paddingHorizontal: 30 }}
          title="Next"
          onPress={() => {}}
        />
      </View>

      <StepperExample open={open} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  logo: {
    width: 150,
    height: 44,
  },
});

export default WorkerOnBoardingScreen;
