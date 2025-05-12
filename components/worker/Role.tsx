import { AppText } from "../../components/common";
import colors from "../../palette/colors";
import { View, StyleSheet, ScrollView } from "react-native";

const MAIN_ROLES = [
  {
    id: 1,
    text: "HGV Class 1 Driver",
    isSelected: true,
  },
  {
    id: 2,
    text: "Cleaning Operative",
    isSelected: true,
  },
  {
    id: 3,
    text: "HGV Class 2 Driver",
    isSelected: false,
  },
  {
    id: 4,
    text: "CSCS Labourer",
    isSelected: true,
  },
  {
    id: 5,
    text: "7.5t Driver",
    isSelected: false,
  },
  {
    id: 6,
    text: "Warehouse Operative",
    isSelected: false,
  },
  {
    id: 7,
    text: "Van Driver",
    isSelected: true,
  },
  {
    id: 8,
    text: "Forklift Operative",
    isSelected: true,
  },
  {
    id: 9,
    text: "Admin / Office",
    isSelected: false,
  },
];

const ADDITIONAL_SKILLS = [
  {
    id: 1,
    text: "HIAB",
  },
  {
    id: 2,
    text: "ADR",
  },
  {
    id: 3,
    text: "CPCS",
  },
  {
    id: 4,
    text: "CSCS",
  },
  {
    id: 5,
    text: "Moffett",
  },
  {
    id: 6,
    text: "Forklift",
  },
  {
    id: 7,
    text: "CSCS",
  },
  {
    id: 8,
    text: "Moffett",
  },
  {
    id: 9,
    text: "Forklift",
  },
  {
    id: 10,
    text: "CSCS",
  },
  {
    id: 11,
    text: "Moffett",
  },
  {
    id: 12,
    text: "Forklift",
  },
];

const Role = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Role</AppText>
      </View>
      <View>
        <AppText style={styles.heading}>Select Main Role</AppText>
        <View style={styles.row}>
          {MAIN_ROLES.map((role) => {
            return (
              <View style={[styles.col]} key={role.id}>
                <View style={styles.defaultStyles}>
                  <View
                    style={[
                      styles.selectionBoxContainer,
                      {
                        borderColor: role.isSelected
                          ? colors.primary["100"]
                          : colors.gray["300"],
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.selectionBox,
                        role.isSelected ? styles.selectionBoxFilled : null,
                      ]}
                    ></View>
                  </View>
                  <AppText style={styles.roleItemText}>{role.text}</AppText>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <AppText style={styles.heading}>Additional Skills</AppText>

        <View style={styles.row}>
          {ADDITIONAL_SKILLS.map((skill) => {
            return (
              <View style={[styles.col]} key={skill.id}>
                <View style={styles.defaultStyles}>
                  <View
                    style={[
                      styles.selectionBoxContainer,
                      {
                        borderColor: colors.gray["300"],
                      },
                    ]}
                  >
                    <View></View>
                  </View>
                  <AppText style={styles.roleItemText}>{skill.text}</AppText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
  heading: {
    color: colors.black["100"],
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  col: {
    marginBottom: 16,
    width: "48%",
    padding: 13,
    borderWidth: 1,
    borderColor: colors.gray["300"],
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.gray["50"],
  },

  roleItemText: {
    fontSize: 12,
    color: colors.gray["600"],
  },

  selectionBoxContainer: {
    width: 20,
    height: 20,
    borderColor: colors.primary["100"],
    borderWidth: 1,
    padding: 2,
    borderRadius: 7,
  },
  selectionBox: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  selectionBoxFilled: {
    backgroundColor: colors.primary["100"],
  },
});

export default Role;
