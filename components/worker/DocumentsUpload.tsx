import { ScrollView, View, StyleSheet } from "react-native";
import colors from "../../palette/colors";
import FileUploader from "../FileUploader";
import { AppText } from "../common";

const DocumentsUpload = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Documents Upload</AppText>
      </View>
      <View>
        <AppText style={{ color: colors.gray["600"] }}>
          Please ensure that the images are clear and show all relevant
          information.
        </AppText>

        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>
            Proof of NI (National Insurance Number)
          </AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>Proof of Address</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>
            Forklift Certificate
          </AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>CSCS Card</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>
            Selfie For Agency ID Card
          </AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>HIAB Certificate</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>ADR Card Front</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>ADR Card Back</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>CPCS Card</AppText>
          <FileUploader />
        </View>
        <View style={{ marginTop: 25 }}>
          <AppText style={styles.formSectionLabel}>Moffett Certificate</AppText>
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
});

export default DocumentsUpload;
