import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Custom Step component that handles its own connector line
const Step = ({ number, title, totalSteps, isLast }) => {
  return (
    <View style={styles.stepContainer}>
      {/* Circle with checkmark */}
      <View style={styles.circleWrapper}>
        <View style={styles.circle}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
      </View>

      {/* Step text */}
      <View style={styles.textWrapper}>
        <Text style={styles.stepNumber}>
          Step {number}/{totalSteps}
        </Text>
        <Text style={styles.stepTitle}>{title}</Text>
      </View>

      {/* Connector line (if not the last step) */}
      {!isLast && (
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
        </View>
      )}
    </View>
  );
};

const StepProgressIndicator = () => {
  const totalSteps = 10;

  // Sample steps data matching your image
  const steps = [
    { id: 2, title: "Personal Details", completed: true },
    { id: 3, title: "Work History & Reference", completed: true },
    { id: 4, title: "Emergency Contact Details", completed: true },
  ];

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <Step
          key={step.id}
          number={step.id}
          title={step.title}
          totalSteps={totalSteps}
          isLast={index === steps.length - 1}
        />
      ))}

      {/* Re-center button */}
      <TouchableOpacity style={styles.recenterButton}>
        <Text style={styles.recenterText}>Re-center Shift+2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  stepContainer: {
    position: "relative",
  },
  circleWrapper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 50,
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  textWrapper: {
    marginLeft: 65, // 50 (circle width) + 15 (gap)
    paddingVertical: 5, // Center text with circle
  },
  stepNumber: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
  lineWrapper: {
    position: "absolute",
    left: 25, // Center of circle (50/2)
    top: 60, // Below the circle (50 + 10)
    width: 2,
    height: 30,
    alignItems: "center",
  },
  line: {
    width: 2,
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  recenterButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  recenterText: {
    color: "white",
    fontSize: 14,
  },
});

console.log("Custom Step component with built-in connector line");

export default StepProgressIndicator;
