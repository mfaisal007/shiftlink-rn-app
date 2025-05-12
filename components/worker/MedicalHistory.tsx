import { ScrollView, View, StyleSheet } from "react-native";
import { AppText } from "../common";
import colors from "../../palette/colors";
import RadioButton from "../RadioButton";
import AppTextArea from "../AppTextArea";

const MedicalHistory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Medical History</AppText>
      </View>
      <View>
        <AppText>
          Please provide information about any medical conditions that may
          affect your ability to carry out your job duties. This information is
          required to ensure your safety and well-being at work.
        </AppText>
        <View style={styles.mt_15}>
          <AppText style={styles.formSectionLabel}>
            Do you have any current or previous medical conditions that could
            affect you carrying out your duties as a driver?
          </AppText>

          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={true} />
              <AppText>Yes</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={false} />
              <AppText>No</AppText>
            </View>
            <View style={styles.mt_10}>
              <AppTextArea />
            </View>
          </View>
        </View>

        <View style={styles.mt_15}>
          <AppText style={styles.formSectionLabel}>
            Do you have any current or previous medical conditions, illness,
            disability or impediment that could affect you carrying out your
            duties?
          </AppText>

          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={true} />
              <AppText>Yes</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={false} />
              <AppText>No</AppText>
            </View>
            <View style={styles.mt_10}>
              <AppTextArea />
            </View>
          </View>
        </View>

        <View style={styles.mt_15}>
          <AppText style={styles.formSectionLabel}>
            Are you currently taking any medication
          </AppText>

          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={true} />
              <AppText>Yes</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={false} />
              <AppText>No</AppText>
            </View>
            <View style={styles.mt_10}>
              <AppTextArea />
            </View>
          </View>
        </View>

        <View style={styles.mt_15}>
          <AppText style={styles.formSectionLabel}>Medical Declaration</AppText>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View style={styles.selectionBoxContainer}>
              <View style={[styles.selectionBox, styles.selectionBoxFilled]} />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <AppText>
                I confirm the above information relating to my medical history
                is true and correct to the best of my knowledge
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formSectionLabel: {
    color: colors.black100,
    fontSize: 14,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
  },
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  oneColumn: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray["300"],
    borderRadius: 8,
    paddingHorizontal: 6,
    backgroundColor: colors.gray["50"],
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
  defaultStyles: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  mt_15: {
    marginTop: 15,
  },
  mt_10: {
    marginTop: 10,
  },
  mb_10: {
    marginBottom: 10,
  },
});

export default MedicalHistory;
