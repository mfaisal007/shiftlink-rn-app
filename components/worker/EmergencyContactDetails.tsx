import { ScrollView, View, StyleSheet } from "react-native";
import colors from "../../palette/colors";
import { AppText, AppTextInput } from "../common";
import { useForm } from "react-hook-form";

const EmergencyContactDetails = () => {
  const { control } = useForm({});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Emergency Contact Details</AppText>
      </View>
      <View>
        <AppText>
          In case of emergencies, we need the details of someone we can contact.
        </AppText>
        <View style={{ marginTop: 15 }}>
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Name</AppText>
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
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Number</AppText>
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
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Email</AppText>
            <View style={styles.oneColumn}>
              <View>
                <AppTextInput
                  name=""
                  control={control}
                  placeholder="Type here"
                />
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Relation to you</AppText>
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
  formInputLabel: {
    fontSize: 12,
    color: colors.gray["600"],
    marginTop: 5,
  },
  formInputLabelTwo: {
    fontSize: 12,
    color: colors.black["100"],
    marginVertical: 5,
    fontFamily: "Inter-SemiBold",
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
});

export default EmergencyContactDetails;
