import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";

const GoalInput = () => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text: any) => {
    setGoal(text);
  };

  return (
    <Modal visible={true} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a course goal"
          value={goal}
          onChangeText={goalInputHandler}
          style={styles.inputGoal}
        />
        <View style={styles.actionButtons}>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGoal: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: "red",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
