import colors from "../palette/colors";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DocumentTextIcon as DocumentTextIconOutline } from "react-native-heroicons/outline";

const FileUploader = () => {
  return (
    <View style={styles.uploadArea}>
      <View
        style={{
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 8,
        }}
      >
        <DocumentTextIconOutline />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.dragDropText}>Drag and Drop File Upload Area </Text>
        <TouchableOpacity>
          <Text style={styles.browseButtonText}>Browse Files</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.supportedFormats}>
        JPG, PNG, PDF. Maximum file size: 5MB.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadArea: {
    backgroundColor: colors.gray["50"],
    borderWidth: 1,
    borderColor: colors.gray["400"],
    borderStyle: "dashed",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 12,
  },
  dragDropText: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
  browseButtonText: {
    color: colors.primary["100"],
    fontWeight: "600",
    fontSize: 13,
  },
  supportedFormats: {
    marginTop: 12,
    fontSize: 12,
    color: "#777",
  },
});

export default FileUploader;
