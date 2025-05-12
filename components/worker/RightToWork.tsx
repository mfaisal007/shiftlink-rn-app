import { ScrollView, View, StyleSheet, TextInput } from "react-native";
import colors from "../../palette/colors";
import RadioButton from "../RadioButton";
import FileUploader from "../FileUploader";
import { AppText } from "../common";

const RightToWork = () => {
  return (
    <ScrollView>
      <View>
        <AppText style={styles.sectionName}>Right To Work</AppText>
      </View>
      <View>
        <AppText>
          To ensure compliance with employment regulations, please select your
          residency status. Additional verification may be required depending on
          your selection.
        </AppText>
        <View style={styles.mt_15}>
          <AppText style={styles.formSectionLabel}>
            Please Select Your Status
          </AppText>

          <View>
            <AppText style={styles.mt_15}>
              Choose the option that best describes your citizenship status.
            </AppText>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={true} />
              <AppText>UK or Irish Citizen</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={false} />
              <AppText>Non-UK or Irish Citizen</AppText>
            </View>
          </View>
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>Document Type</AppText>

          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={false} />
              <AppText>Passport</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={true} />
              <AppText>UK Birth Certificate</AppText>
            </View>
          </View>
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>
            Upload UK Birth Certificate
          </AppText>

          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={false} />
              <AppText>Passport</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={true} />
              <AppText>UK Birth Certificate</AppText>
            </View>
          </View>
        </View>
        <View style={styles.mt_25}>
          <FileUploader />
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>Photo ID</AppText>
          <FileUploader />
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>
            Right To Work Share Code
          </AppText>
          <View style={styles.oneColumn}>
            <View style={styles.input}>
              <TextInput placeholder="Type here" />
            </View>
          </View>
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>
            Do You Hold A Student Visa
          </AppText>
          <View>
            <View style={[styles.defaultStyles, styles.mb_10]}>
              <RadioButton isSelected={true} />
              <AppText>UK or Irish Citizen</AppText>
            </View>
            <View style={styles.defaultStyles}>
              <RadioButton isSelected={false} />
              <AppText>Non-UK or Irish Citizen</AppText>
            </View>
          </View>
        </View>
        <View style={styles.mt_25}>
          <AppText style={styles.formSectionLabel}>
            University Letter With Vacation Dates
          </AppText>
          <FileUploader />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formSectionLabel: {
    color: colors.black100,
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
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
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
  mt_15: {
    marginTop: 15,
  },
  mt_25: {
    marginTop: 25,
  },
  defaultStyles: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  mb_10: {
    marginBottom: 10,
  },
});

export default RightToWork;
