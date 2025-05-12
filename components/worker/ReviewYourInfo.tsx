import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {
  UserCircleIcon as UserCircleIconOutline,
  PencilIcon as PencilIconOutline,
  UserIcon as UserIconOutline,
  DocumentTextIcon as DocumentTextIconOutline,
  TrashIcon as TrashIconOutline,
  ArrowDownTrayIcon as DownloadIconOutline,
} from "react-native-heroicons/outline";
import colors from "../../palette/colors";
import { AppText } from "../common";

const ADDITIONAL_SKIILS = [
  {
    id: 1,
    text: "HIAB",
  },
  {
    id: 2,
    text: "Forklift",
  },
  {
    id: 3,
    text: "ADR",
  },
  {
    id: 4,
    text: "CSCS",
  },
];

const ReviewYourInfo = () => {
  return (
    <ScrollView>
      <View>
        <AppText style={styles.sectionName}>Review Your Information</AppText>
      </View>
      <View>
        <AppText style={{ color: colors.gray["600"] }}>
          Please review the information you have provided in each section. If
          any details are incorrect, you can edit them by clicking the “Edit”
          button next to each section. Once all information is verified, click
          “Submit” to complete your registration
        </AppText>
        <RoleDetails />
        <PersonalDetails />
        <WorkHistoryAndReference />
        <EmergencyContactDetails />
        <BankingDetails />
        <RightToWork />
      </View>
    </ScrollView>
  );
};

const RoleDetails = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserCircleIconOutline size={28} />
          </View>
          <AppText>Role & Skills</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Main Role:</AppText>
        </View>
        <View>
          <AppText>HGV Class 1 Driver</AppText>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>
            Additional Skills:
          </AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: 10,
            flex: 1,
          }}
        >
          {ADDITIONAL_SKIILS.map((skill) => {
            return (
              <View
                style={{
                  backgroundColor: colors.white,
                  borderWidth: 1,
                  borderColor: colors.gray["300"],
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                key={skill.id}
              >
                <AppText style={{ fontSize: 12 }}>{skill.text}</AppText>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const PersonalDetails = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserIconOutline size={28} />
          </View>
          <AppText>Personal Details</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Name:</AppText>
        </View>
        <View>
          <AppText>Jack Could</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Email:</AppText>
        </View>
        <View>
          <AppText>jack@gmail.com</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>
            Street Address:
          </AppText>
        </View>
        <View>
          <AppText>123 Elm Street, Apartment 4B</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>City:</AppText>
        </View>
        <View>
          <AppText>London</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Country:</AppText>
        </View>
        <View>
          <AppText>Greater London</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Post Code:</AppText>
        </View>
        <View>
          <AppText>SW1A AA</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>
            Date Of Birth:
          </AppText>
        </View>
        <View>
          <AppText>12/03/1990</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>N.I Number:</AppText>
        </View>
        <View>
          <AppText>QQ 12 34 56 C</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>
            Mobile Number:
          </AppText>
        </View>
        <View>
          <AppText>+40 7740 900123</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Nationality:</AppText>
        </View>
        <View>
          <AppText>British</AppText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: 10,
          marginTop: 15,
        }}
      >
        <View>
          <AppText style={{ color: colors.gray["700"] }}>Gender:</AppText>
        </View>
        <View>
          <AppText>Male</AppText>
        </View>
      </View>
    </View>
  );
};

const WorkHistoryAndReference = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserIconOutline size={28} />
          </View>
          <AppText>Work History & References</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View>
        <AppText style={[styles.formSectionLabel, { fontSize: 18 }]}>
          Reference Two
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Name:</AppText>
          </View>
          <View>
            <AppText>Sarah Johnson</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Company:</AppText>
          </View>
          <View>
            <AppText>Swift Transport LTD</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Contact Number:
            </AppText>
          </View>
          <View>
            <AppText>+44 7712 345678</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Email:</AppText>
          </View>
          <View>
            <AppText>sarah.johnson@swifttransport.co.uk</AppText>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 15,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <View>
              <AppText style={{ color: colors.gray["700"] }}>
                Consent To Contact:
              </AppText>
            </View>
            <View>
              <AppText>Yes</AppText>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View>
              <AppText style={{ color: colors.gray["700"] }}>
                Description:
              </AppText>
            </View>
            <View>
              <AppText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                eos nesciunt dolorem excepturi, saepe ipsa, magni deleniti atque
                iste sapiente ipsum doloribus quasi quod natus velit. Enim
                voluptas maiores mollitia modi? Facere optio totam assumenda
                modi minus at vel voluptates itaque temporibus pariatur
                doloribus ipsa numquam eum tenetur aliquid magnam magni
              </AppText>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.gray["50"],
              borderWidth: 1,
              borderStyle: "dashed",
              borderColor: colors.gray["400"],
              padding: 10,
              borderRadius: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              marginTop: 15,
            }}
          >
            <View style={{ flexDirection: "row", columnGap: 10 }}>
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <DocumentTextIconOutline />
              </View>
              <View style={{ marginTop: 5 }}>
                <AppText style={{ color: colors.black100, fontSize: 13 }}>
                  CV_John_Smith
                </AppText>
                <AppText style={{ color: colors.gray["700"], fontSize: 12 }}>
                  File size: 5mb
                </AppText>
              </View>
            </View>
            <View style={{ flexDirection: "row", columnGap: 10 }}>
              <TouchableOpacity onPress={() => {}}>
                <TrashIconOutline size={20} color={colors.danger.dark} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <DownloadIconOutline size={20} color={colors.primary["100"]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const EmergencyContactDetails = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserIconOutline size={28} />
          </View>
          <AppText>Emergency Contact Details</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Name:</AppText>
          </View>
          <View>
            <AppText>Sarah Johnson</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Relation to You:
            </AppText>
          </View>
          <View>
            <AppText>Swift Transport LTD</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Contact Number:
            </AppText>
          </View>
          <View>
            <AppText>+44 7712 345678</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Email:</AppText>
          </View>
          <View>
            <AppText>sarah.johnson@swifttransport.co.uk</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const BankingDetails = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserIconOutline size={28} />
          </View>
          <AppText>Banking Details</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Name:</AppText>
          </View>
          <View>
            <AppText>Sarah Johnson</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Relation to You:
            </AppText>
          </View>
          <View>
            <AppText>Swift Transport LTD</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Contact Number:
            </AppText>
          </View>
          <View>
            <AppText>+44 7712 345678</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Email:</AppText>
          </View>
          <View>
            <AppText>sarah.johnson@swifttransport.co.uk</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const RightToWork = () => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: colors.gray["100"],
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            columnGap: "10",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colors.gray["200"],
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <UserIconOutline size={28} />
          </View>
          <AppText>Right To Work</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: "10",
          }}
        >
          <AppText style={{ fontSize: 13 }}>Edit Details</AppText>
          <PencilIconOutline size={18} />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Status:</AppText>
          </View>
          <View>
            <AppText>Sarah Johnson</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>Sort Code:</AppText>
          </View>
          <View>
            <AppText>Swift Transport LTD</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Document Type:
            </AppText>
          </View>
          <View>
            <AppText>+44 7712 345678</AppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <View>
            <AppText style={{ color: colors.gray["700"] }}>
              Account Number:
            </AppText>
          </View>
          <View>
            <AppText>1231232132</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formSectionLabel: {
    color: colors.black100,
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginTop: 10,
  },
  sectionName: {
    fontSize: 18,
    color: colors.black["100"],
    marginVertical: 12,
    fontFamily: "Inter-Bold",
  },
});

export default ReviewYourInfo;
