import React, { useState } from "react";
import { Switch } from "react-native-switch";
import colors from "../palette/colors";

interface AppSwitchProps {
  value: boolean;
  onValueChange: () => void;
  disabled?: boolean;
  activeColor?: string;
  inActiveColor?: string;
  circleSize?: number;
  barHeight?: number;
  circleBorderWidth?: number;
  backgroundActive?: string;
  backgroundInactive?: string;
  circleActiveColor?: string;
  circleInActiveColor?: string;
  changeValueImmediately?: boolean;
  renderActiveText?: boolean;
  renderInActiveText?: boolean;
  switchLeftPx?: number;
  switchRightPx?: number;
  switchWidthMultiplier?: number;
  switchBorderRadius?: number;
}

const AppSwitch: React.FC<AppSwitchProps> = ({
  value = false,
  onValueChange,
  disabled = false,
  activeColor = "purple", // iOS default green color
  inActiveColor = "#ccc", // Light gray background when off
  circleSize = 15,
  barHeight = 20,
  circleBorderWidth = 0,
  backgroundActive = colors.gray["200"],
  backgroundInactive = colors.gray["200"],
  circleActiveColor = colors.primary["100"],
  circleInActiveColor = colors.gray["600"],
  changeValueImmediately = true,
  renderActiveText = false,
  renderInActiveText = false,
  switchLeftPx = 1.2,
  switchRightPx = 1.1,
  switchWidthMultiplier = 3.3,
  switchBorderRadius = 30,
}) => {
  const [isEnabled, setIsEnabled] = useState(value);

  return (
    <Switch
      value={isEnabled}
      onValueChange={(value) => {
        setIsEnabled(value);
      }}
      disabled={disabled}
      activeText={""}
      inActiveText={""}
      circleSize={circleSize}
      barHeight={barHeight}
      circleBorderWidth={circleBorderWidth}
      backgroundActive={backgroundActive}
      backgroundInactive={backgroundInactive}
      circleActiveColor={circleActiveColor}
      circleInActiveColor={circleInActiveColor}
      changeValueImmediately={changeValueImmediately}
      renderActiveText={renderActiveText}
      renderInActiveText={renderInActiveText}
      switchLeftPx={switchLeftPx}
      switchRightPx={switchRightPx}
      switchWidthMultiplier={switchWidthMultiplier}
      switchBorderRadius={switchBorderRadius}
      containerStyle={{ borderColor: "#ccc", borderWidth: 1 }}
    />
  );
};

export default AppSwitch;
