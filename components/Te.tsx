import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

// A flexible row layout component that wraps when content gets too long
export default function FlexibleRowLayout() {
  return (
    <View style={styles.cardContainer}>
      {/* Main container with flex-wrap behavior */}
      <View style={styles.container}>
        {/* Left section - will take available space but can wrap */}
        <View style={styles.leftSection}>
          <View style={styles.iconAndTextContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>📱</Text>
            </View>
            {/* This text container will grow/shrink and can cause wrapping */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>Emergency Contact how are yo</Text>
              <Text style={styles.subtitle}>Details</Text>
            </View>
          </View>
        </View>

        {/* Right section - will maintain its size and move to next line if needed */}
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => console.log("Edit pressed")}
          >
            <Text style={styles.editText}>Edit Details</Text>
            <Feather name="edit-2" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
    padding: 10,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
    marginBottom: 5,

    backgroundColor: "red",
  },
  rightSection: {
    marginBottom: 5,
    backgroundColor: "yellow",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e3e3e8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1, // This will allow text to grow and potentially cause wrapping
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  editText: {
    color: "#007AFF",
    marginRight: 4,
    fontSize: 14,
  },
});
