import { View, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  KeyIcon as KeyIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  EyeIcon as EyeIconOutline,
  EyeSlashIcon as EyeSlashIconOutline,
} from "react-native-heroicons/outline";
import {
  AppText,
  AppButton,
  Screen,
  AppTextInput,
} from "../../components/common";
import colors from "../../palette/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthNavigatorParamList } from "../../types/navigation";
import routes from "../../navigation/routes";
import { LoginSchema, loginSchema } from "../../lib/validations/auth";

interface LoginScreenProps
  extends NativeStackScreenProps<AuthNavigatorParamList, "Login"> {}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { RESET_PASSWORD } = routes;
  const [isPasswordFieldVisible, setIsPasswordFieldVisible] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handlePassswordVisibility = () => {
    setIsPasswordFieldVisible((prevState) => !prevState);
  };

  const handleLogin = (values: LoginSchema) => {
    console.log(values);
    navigation.navigate(RESET_PASSWORD);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/images/shift-link-logo-lg.png")}
            resizeMode="cover"
          />
        </View>

        <View style={styles.headingContainer}>
          <AppText style={styles.heading}>Log In</AppText>
          <AppText style={styles.subHeading}>
            Log in to manage the shifts
          </AppText>
        </View>

        <ScrollView>
          <View style={styles.formGroup}>
            <AppText style={styles.formLabel}>Email</AppText>
            <AppTextInput
              control={control}
              name="email"
              leftIcon={
                <EnvelopeIconOutline
                  color={
                    errors?.email?.message
                      ? colors.danger["dark"]
                      : colors.gray["600"]
                  }
                  size={20}
                  style={{ marginRight: 10 }}
                />
              }
              error={errors?.email?.message}
            />
          </View>
          <View style={styles.formGroup}>
            <AppText style={styles.formLabel}>Password</AppText>
            <AppTextInput
              control={control}
              name="password"
              error={errors?.password?.message}
              leftIcon={
                <KeyIconOutline
                  color={
                    errors?.password?.message
                      ? colors.danger["dark"]
                      : colors.gray["600"]
                  }
                  size={20}
                  style={{ marginRight: 10 }}
                />
              }
              rightIcon={
                isPasswordFieldVisible ? (
                  <EyeSlashIconOutline
                    onPress={handlePassswordVisibility}
                    color={
                      errors?.password?.message
                        ? colors.danger["dark"]
                        : colors.gray["600"]
                    }
                    size={20}
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <EyeIconOutline
                    onPress={handlePassswordVisibility}
                    color={
                      errors?.password?.message
                        ? colors.danger["dark"]
                        : colors.gray["600"]
                    }
                    size={20}
                    style={{ marginRight: 10 }}
                  />
                )
              }
              secureTextEntry={isPasswordFieldVisible ? false : true}
            />
          </View>
          <AppButton title="Log In" onPress={handleSubmit(handleLogin)} />
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  logo: {
    width: 150,
    height: 44,
  },
  headingContainer: {
    marginVertical: 40,
  },
  heading: {
    fontSize: 25,
    color: colors.black["100"],
    fontFamily: "Inter-Bold",
  },
  subHeading: {
    fontSize: 15,
  },
  formGroup: {
    marginVertical: 10,
  },
  formLabel: {
    color: colors.black["100"],
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    marginBottom: 5,
  },
});

export default LoginScreen;
