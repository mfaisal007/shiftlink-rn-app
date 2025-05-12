import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { CalendarIcon as CalendarIconOutline } from "react-native-heroicons/outline";
import colors from "../../palette/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import { AppText, AppTextInput } from "../../components/common";
import { useForm } from "react-hook-form";

const PersonalDetails = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { control } = useForm({});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <AppText style={styles.sectionName}>Personal Details</AppText>
      </View>
      <View>
        <AppText>
          Tell us a bit about yourself. This information helps us set up your
          profile and ensures compliance with our employment regulations.
        </AppText>
        <View style={{ marginTop: 15 }}>
          <AppText style={styles.formSectionLabel}>Address</AppText>
          <View style={styles.row}>
            <View style={styles.twoColumn}>
              <View>
                <AppTextInput control={control} name="" />
              </View>
              <AppText style={styles.formInputLabel}>Street Address</AppText>
            </View>
            <View style={styles.twoColumn}>
              <View>
                <AppTextInput control={control} name="" />
              </View>
              <AppText style={styles.formInputLabel}>
                Street Address Line 2
              </AppText>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.threeColumn}>
              <View>
                <AppTextInput control={control} name="" />
              </View>
              <AppText style={styles.formInputLabel}>City</AppText>
            </View>
            <View style={styles.threeColumn}>
              <View>
                <AppTextInput control={control} name="" />
              </View>
              <AppText style={styles.formInputLabel}>Country</AppText>
            </View>
            <View style={styles.threeColumn}>
              <View>
                <AppTextInput control={control} name="" />
              </View>
              <Text style={styles.formInputLabel}>Postal Code</Text>
            </View>
          </View>
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>Date of Birth</AppText>
            <View style={styles.oneColumn}>
              <TouchableOpacity onPress={() => setShow(true)}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: colors.gray["200"],
                    backgroundColor: colors.gray["50"],
                    borderRadius: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  <View style={styles.datePickerContainer}>
                    <CalendarIconOutline color={colors.gray["600"]} />
                    <AppText style={styles.datePickerText}>DD/MM/YYYY</AppText>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <AppText style={styles.formInputLabelTwo}>N.I Number</AppText>
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
            <AppText style={styles.formInputLabelTwo}>Mobile Number</AppText>
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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={() => {}}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  formSectionLabel: {
    color: colors.black100,
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginBottom: 15,
  },

  formInputLabel: {
    fontSize: 12,
    color: colors.gray["600"],
  },

  formInputLabelTwo: {
    fontSize: 12,
    color: colors.black100,
    marginVertical: 5,
    fontFamily: "Inter-SemiBold",
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

  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 2,
  },

  datePickerText: {
    marginLeft: 5,
    color: colors.gray["600"],
  },
});

export default PersonalDetails;
