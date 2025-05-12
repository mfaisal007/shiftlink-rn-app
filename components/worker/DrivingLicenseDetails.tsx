import { ScrollView, View, StyleSheet, TextInput } from "react-native";
import { AppText, AppTextInput } from "../common";
import colors from "../../palette/colors";
import FileUploader from "../FileUploader";
import { useForm } from "react-hook-form";

const DrivingLicenseDetails = () => {
  const { control } = useForm();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Driving License Details</AppText>
      </View>
      <View>
        <AppText>
          Please upload the required documents to verify your eligibility for
          driving roles. Ensure that the images are clear and show all relevant
          information.
        </AppText>

        <View style={{ marginTop: 25 }}>
          <View style={styles.row}>
            <AppText style={styles.formSectionLabel}>
              Driving License Number
            </AppText>
            <View style={styles.oneColumn}>
              <View>
                <AppTextInput
                  control={control}
                  name=""
                  placeholder="Type here"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>
            Driver License Front
          </AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>Driver License Back</AppText>
          <FileUploader />
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
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
                I give permission to obtain a DLVA license to check my behalf.
                These take place upon registration, every months and if
                requested by a client.
              </AppText>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>CPC Card Front</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>CPC Card Back</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>Digi Tacho Front</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>Digi Tacho Back</AppText>
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
});

export default DrivingLicenseDetails;
