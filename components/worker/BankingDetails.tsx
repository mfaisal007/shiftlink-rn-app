import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import colors from "../../palette/colors";
import { AppText, AppTextInput } from "../common";
import { useForm } from "react-hook-form";

const BankingDetails = () => {
  const { control } = useForm();
  const { fontScale } = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Banking Details</AppText>
      </View>
      <View>
        <AppText>
          Please provide your account details to receive wage payments. Payment
          is processed every Friday for assignments worked during the previous
          week.
        </AppText>
        <View style={{ marginTop: 15 }}>
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Bank Name</AppText>
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
            <AppText style={styles.formInputLabelTwo}>Name on Account</AppText>
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
            <AppText style={styles.formInputLabelTwo}>Sort Code</AppText>
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
            <AppText style={styles.formInputLabelTwo}>Account Number</AppText>
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

  formSectionLabel: {
    color: colors.black100,
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 15,
  },

  formInputLabel: {
    fontSize: 12,
    color: colors.gray["600"],
    marginTop: 5,
  },

  formInputLabelTwo: {
    fontSize: 12,
    color: colors.black100,
    marginVertical: 5,
    fontFamily: "Inter_700Bold",
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

export default BankingDetails;
