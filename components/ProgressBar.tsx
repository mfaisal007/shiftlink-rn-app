import { StyleSheet, View } from "react-native";
import colors from "../palette/colors";

interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercentage }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 4,
    backgroundColor: "#E5E7EB",
    width: "100%",
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.secondary["100"],
  },
});

export default ProgressBar;
