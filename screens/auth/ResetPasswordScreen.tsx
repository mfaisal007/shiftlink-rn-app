import { View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  KeyIcon as KeyIconOutline,
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
import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from "../../lib/validations/auth";

interface ResetPasswordScreenProps
  extends NativeStackScreenProps<AuthNavigatorParamList, "ResetPassword"> {}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  navigation,
}) => {
  const [isPasswordFieldVisible, setIsPasswordFieldVisible] =
    useState<boolean>(false);
  const [isReEnterPasswordFieldVisible, setIsReEnterPasswordFieldVisible] =
    useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const handlePassswordVisibility = (fieldName: string) => {
    if (fieldName === "password") {
      setIsPasswordFieldVisible((prevState) => !prevState);
    } else {
      setIsReEnterPasswordFieldVisible((prevState) => !prevState);
    }
  };

  const handleResetPassword = (values: ResetPasswordSchema) => {
    console.log("VALUES=>", values);
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
          <AppText style={styles.heading}>Reset Password</AppText>
        </View>
        <ScrollView>
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
                    onPress={() => handlePassswordVisibility("password")}
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
                    onPress={() => handlePassswordVisibility("password")}
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
          <View style={styles.formGroup}>
            <AppText style={styles.formLabel}>Re-enter Password</AppText>
            <AppTextInput
              control={control}
              name="confirmPassword"
              error={errors?.confirmPassword?.message}
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
                isReEnterPasswordFieldVisible ? (
                  <EyeSlashIconOutline
                    onPress={() => handlePassswordVisibility("reEnterPassword")}
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
                    onPress={() => handlePassswordVisibility("reEnterPassword")}
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
              secureTextEntry={isReEnterPasswordFieldVisible ? false : true}
            />
          </View>
          <AppButton
            title="Reset Password"
            onPress={handleSubmit(handleResetPassword)}
          />
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
    fontSize: 18,
    color: colors.black["100"],
    fontFamily: "Inter-Bold",
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

export default ResetPasswordScreen;
