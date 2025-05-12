import { TouchableOpacity, View, StyleSheet } from "react-native";
import { EyeIcon as EyeIconOutline } from "react-native-heroicons/outline";
import { type ReactNode } from "react";
import { AppText } from "../common";
import colors from "../../palette/colors";

interface WorkerOnBoardingProgressInfoProps {
  stepTitle: string;
  stepIcon: ReactNode;
  currentStep: number;
}

const WorkerOnBoardingProgressInfo: React.FC<
  WorkerOnBoardingProgressInfoProps
> = ({ stepTitle, stepIcon, currentStep }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInnerWrapper}>
        <View style={styles.stepInfoContainer}>
          <View style={styles.stepOuterWrapper}>
            <View style={styles.stepInnerWrapper}>{stepIcon}</View>
          </View>
          <View>
            <AppText style={styles.stepInfoText}>Step {currentStep}/10</AppText>
            <AppText style={styles.currentStepText}>{stepTitle}</AppText>
          </View>
        </View>
        <TouchableOpacity style={styles.eyeContainer}>
          <View>
            <EyeIconOutline size={18} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray["50"],
    padding: 12,
  },
  containerInnerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepInfoContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  eyeContainer: {
    backgroundColor: colors.white,
    padding: "2%",
    borderRadius: 8,
  },
  stepOuterWrapper: {
    backgroundColor: "white",
    height: 55,
    width: 55,
    borderRadius: "50%",
    padding: 6,
    borderWidth: 1,
    borderColor: colors.black100,
  },
  stepInnerWrapper: {
    backgroundColor: colors.black100,
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  stepInfoText: {
    marginBottom: 4,
    color: colors.gray700,
    fontFamily: "Inter_400Regular",
  },
  currentStepText: {
    color: colors.black100,
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
});

export default WorkerOnBoardingProgressInfo;
