import React, { type ReactNode, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  UserCircleIcon as UserCircleIconOutline,
  CheckIcon as CheckIconOutline,
  UserIcon as UserIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  DevicePhoneMobileIcon as DevicePhoneMobileIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  IdentificationIcon as IdentificationIconOutline,
  DocumentDuplicateIcon as DocumentDuplicateIconOutline,
  DocumentIcon as DocumentIconOutline,
  HeartIcon as HeartIconOutline,
  ShieldExclamationIcon as SheildExclamationIconOutline,
  UserGroupIcon as UserGroupIconOutline,
} from "react-native-heroicons/outline";
import colors from "../palette/colors";
import { AppText } from "./common";
import { Modal } from "react-native";

interface StepItemProps {
  title: string;
  description: string;
  stepNumber: number;
  isCompleted: boolean;
  isActive: boolean;
  isLastStep: boolean;
  showIcon: (color: string) => ReactNode;
}

interface Step {
  title: string;
  description: string;
  icon: (color: string) => ReactNode;
}

interface VerticalStepperProps {
  steps: Step[];
  currentStep: number;
}

const StepItem: React.FC<StepItemProps> = ({
  title,
  description,
  stepNumber,
  isCompleted,
  isActive,
  isLastStep,
  showIcon,
}) => {
  console.log(isActive, isCompleted, title, stepNumber);
  return (
    <View style={styles.stepContainer}>
      {/* Left side - vertical line and circle indicator */}
      <View style={styles.stepIndicatorContainer}>
        <View
          style={[
            styles.stepIndicator,
            isActive && { borderColor: colors.black["100"] },
            !isActive && !isCompleted && { borderColor: colors.gray["400"] },
          ]}
        >
          <View
            style={[
              {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
              },
              isCompleted && styles.completedIndicator,
              isActive && styles.activeIndicator,
            ]}
          >
            {isCompleted ? (
              <CheckIconOutline size={22} color="#ffffff" />
            ) : (
              showIcon(isActive ? colors.white : colors.black["100"])
            )}
          </View>
        </View>
        {/* The vertical connecting line */}
        {!isLastStep && (
          <View
            style={[styles.verticalLine, isCompleted && styles.completedLine]}
          />
        )}
      </View>

      {/* Right side - content */}
      <View style={styles.stepContent}>
        <AppText style={[styles.stepTitle]}>{title}</AppText>
        <AppText style={styles.stepDescription}>{description}</AppText>
      </View>
    </View>
  );
};

// The main vertical stepper component
const VerticalStepper: React.FC<VerticalStepperProps> = ({
  steps,
  currentStep = 1,
}) => {
  return (
    <ScrollView style={styles.verticalStepperContainer}>
      {steps.map((step, index) => (
        <StepItem
          key={index}
          title={step.title}
          description={step.description}
          stepNumber={index + 1}
          isCompleted={index + 1 < currentStep}
          isActive={index + 1 === currentStep}
          isLastStep={index === steps.length - 1}
          showIcon={step.icon}
        />
      ))}
      <View
        style={{
          backgroundColor: colors.white,
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 12,
          gap: 15,
          borderColor: colors.gray["300"],
          borderWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: colors.gray["200"],
            padding: 10,
            borderRadius: "50%",
          }}
        >
          <UserGroupIconOutline size={22} />
        </View>
        <View>
          <AppText style={{ color: colors.gray["700"] }}>
            Having Trouble?
          </AppText>
          <AppText
            style={{
              color: colors.gray["900"],
              fontFamily: "Inter-Bold",
              fontSize: 16,
            }}
          >
            Contact Us
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
};

interface StepperExampleProps {
  open: boolean;
}

// Example usage
const StepperExample: React.FC<StepperExampleProps> = ({ open }) => {
  // Sample data for the stepper
  const stepperData = [
    {
      title: "Step 1/10",
      description: "Role",
      icon: (color: string) => (
        <UserCircleIconOutline size={22} color={color} />
      ),
    },
    {
      title: "Step 2/10",
      description: "Personal Details",
      icon: (color: string) => <UserIconOutline size={22} color={color} />,
    },
    {
      title: "Step 3/10",
      description: "Work History & Reference",
      icon: (color: string) => (
        <ClipboardDocumentListIconOutline size={22} color={color} />
      ),
    },
    {
      title: "Step 4/10",
      description: "Emergency Contact Details",
      icon: (color: string) => (
        <DevicePhoneMobileIconOutline size={22} color={color} />
      ),
    },
    {
      title: "Step 5/10",
      description: "Banking Details",
      icon: (color: string) => <BanknotesIconOutline size={22} color={color} />,
    },
    {
      title: "Step 6/10",
      description: "Right To Work",
      icon: (color: string) => (
        <IdentificationIconOutline size={22} color={color} />
      ),
    },
    {
      title: "Step 7/10",
      description: "Documents",
      icon: (color: string) => (
        <DocumentDuplicateIconOutline size={22} color={color} />
      ),
    },
    {
      title: "Step 8/10",
      description: "Driving License Documents",
      icon: (color: string) => <DocumentIconOutline size={22} color={color} />,
    },
    {
      title: "Step 9/10",
      description: "Medical Declaration",
      icon: (color: string) => <HeartIconOutline size={22} color={color} />,
    },
    {
      title: "Step 10/10",
      description: "Declarations",
      icon: (color: string) => (
        <SheildExclamationIconOutline size={22} color={color} />
      ),
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="slide"
      visible={open}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.stepperExampleContainer}>
        <VerticalStepper steps={stepperData} currentStep={2} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  verticalStepperContainer: {
    flex: 1,
  },
  stepperExampleContainer: {
    flex: 1,
    // backgroundColor: "white",
  },

  // Step container styles
  stepContainer: {
    flexDirection: "row",
  },
  stepIndicatorContainer: {
    alignItems: "center",
    marginRight: 12,
  },

  // Indicator styles (circle)
  stepIndicator: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.gray["200"],
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    borderColor: colors.success["default"],
    padding: 3,
    borderWidth: 2,
  },
  completedIndicator: {
    backgroundColor: colors.success["default"],
  },
  activeIndicator: {
    backgroundColor: colors.black["100"],
  },
  stepNumber: {
    color: "#757575",
    fontSize: 14,
    fontWeight: "bold",
  },
  activeStepNumber: {
    color: "#FFFFFF",
  },

  // Vertical line styles
  verticalLine: {
    width: 2,
    height: 30,
    flex: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0, // Center the line with the circle
  },
  completedLine: {
    backgroundColor: "#4CAF50",
  },

  // Content styles
  stepContent: {
    flex: 1,
    paddingBottom: 16,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 16,
    color: colors.black["100"],
    fontFamily: "Inter-Bold",
  },
});

export default StepperExample;
