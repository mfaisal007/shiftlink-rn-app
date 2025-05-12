import { ScrollView, View, StyleSheet } from "react-native";
import { AppText } from "../common";
import colors from "../../palette/colors";
import RadioButton from "../RadioButton";
import AppTextArea from "../AppTextArea";
import AppSwitch from "../AppSwitch";

const Declarations = () => {
  return (
    <ScrollView>
      <View>
        <AppText style={styles.sectionName}>Declarations</AppText>
      </View>
      <View>
        <AppText>
          Please read the following declarations carefully and confirm that you
          have read, understood, and agreed to these terms.
        </AppText>
        <View style={{ marginTop: 15 }}>
          <AppText style={styles.formSectionLabel}>
            Do you have any unspent criminal convictions?
          </AppText>

          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <RadioButton isSelected={true} />
              <AppText>Yes</AppText>
            </View>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <RadioButton isSelected={false} />
              <AppText>No</AppText>
            </View>
            <View style={{ marginTop: 10 }}>
              <AppTextArea />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            columnGap: 10,
          }}
        >
          <AppSwitch value={true} onValueChange={() => {}} />
          <View style={{ flex: 1 }}>
            <AppText>I have read and accept the Drivers Declaration</AppText>
          </View>
        </View>
        <View style={{ marginTop: 25, flexDirection: "row", columnGap: 10 }}>
          <AppSwitch value={true} onValueChange={() => {}} />
          <View style={{ flex: 1 }}>
            <AppText>
              I have read and understood the Key Information Document
            </AppText>
          </View>
        </View>

        <View style={{ marginTop: 25, flexDirection: "row", columnGap: 10 }}>
          <AppSwitch value={true} onValueChange={() => {}} />
          <View style={{ flex: 1 }}>
            <AppText>
              I have read, understood and accept the Contract For Services
            </AppText>
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
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
});

export default Declarations;
