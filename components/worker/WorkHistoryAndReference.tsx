import { View, StyleSheet, ScrollView } from "react-native";
import { AppText, AppTextInput } from "../../components/common";
import colors from "../../palette/colors";
import FileUploader from "../FileUploader";
import { useForm } from "react-hook-form";

const WorkHistoryAndReference = () => {
  const { control } = useForm({});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Work History & Reference</AppText>
      </View>
      <View>
        <AppText>
          Please upload your latest CV and provide details of two professional
          references.
        </AppText>
        <View style={{ marginTop: 15 }}>
          <AppText style={styles.formSectionLabel}>CV</AppText>
          <View>
            <FileUploader />
          </View>
        </View>

        <View style={styles.mt}>
          <AppText style={[styles.formSectionLabel, { fontSize: 18 }]}>
            Reference One
          </AppText>
          <View style={styles.row}>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Name</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Company</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Contact Number</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Email</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mt}>
          <AppText style={[styles.formSectionLabel, { fontSize: 18 }]}>
            Reference Two
          </AppText>
          <View style={styles.row}>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Name</AppText>
              <View>
                <AppTextInput name="" control={control} />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Company</AppText>
              <View>
                <AppTextInput name="" control={control} />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Contact Number</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
            <View style={styles.twoColumn}>
              <AppText style={styles.formInputLabel}>Email</AppText>
              <View>
                <AppTextInput control={control} name="" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
  formSectionLabel: {
    color: colors.black["100"],
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
  },

  formInputLabel: {
    fontSize: 12,
    color: colors.gray["600"],
    marginVertical: 5,
  },

  oneColumn: {
    width: "100%",
    marginBottom: 16,
  },

  twoColumn: {
    marginBottom: 16,
    width: "48%",
  },

  threeColumn: {
    marginBottom: 16,
    width: "30%",
  },

  mt: {
    marginTop: 15,
  },
});

export default WorkHistoryAndReference;
