import React, { useState, Fragment } from "react";
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Button, CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";


import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password should be at least 6 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Confirm Password is required"),
  check: Yup.boolean().oneOf([true], "Please check the agreement")
});

export default function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("ios-eye");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("ios-eye");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

  const navigation = useNavigation()

  function goToLogin() {
    return navigation.navigate("Login");
  }

  function handlePasswordVisibility() {
    if (passwordIcon === "ios-eye") {
      setPasswordIcon("ios-eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (passwordIcon === "ios-eye-off") {
      setPasswordIcon("ios-eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "ios-eye") {
      setConfirmPasswordIcon("ios-eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "ios-eye-off") {
      setConfirmPasswordIcon("ios-eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignup(values) {
    const { name, email, password } = values;

    try {
      if(name.length > 0){
        navigation.navigate('Login')
      }
  
    } catch (error) {
      alert(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSignup}>
        <ScrollView style={styles.scrollStyle}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              check: false
            }}
            onSubmit={(values) => {
              handleOnSignup(values);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleSubmit, errors,isValid,touched,handleBlur,isSubmitting,setFieldValue}) => (
              <Fragment>
                <FormInput
                  name="name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  placeholder="Enter your full name"
                  iconName="md-person"
                  iconColor="#2C384A"
                  onBlur={handleBlur("name")}
                />
                <ErrorMessage errorValue={touched.name && errors.name} />

                <FormInput
                  name="email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  placeholder="Enter email"
                  autoCapitalize="none"
                  iconName="ios-mail"
                  iconColor="#2C384A"
                  onBlur={handleBlur("email")}
                />
                <ErrorMessage errorValue={touched.email && errors.email} />

                <FormInput
                  name="password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  placeholder="Enter password"
                  iconName="ios-lock"
                  iconColor="#2C384A"
                  onBlur={handleBlur("password")}
                  secureTextEntry={passwordVisibility}
                  rightIcon={
                    <TouchableOpacity onPress={handlePasswordVisibility}>
                      <Ionicons name={passwordIcon} size={28} color="grey" />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage errorValue={touched.password && errors.password} />

                <FormInput
                  name="password"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  placeholder="Confirm password"
                  iconName="ios-lock"
                  iconColor="#2C384A"
                  onBlur={handleBlur("confirmPassword")}
                  secureTextEntry={confirmPasswordVisibility}
                  rightIcon={
                    <TouchableOpacity onPress={handleConfirmPasswordVisibility}>
                      <Ionicons
                        name={confirmPasswordIcon}
                        size={28}
                        color="grey"
                      />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword} />

                <CheckBox
                  containerStyle={styles.checkBoxContainer}
                  checkedIcon="check-box"
                  iconType="material"
                  uncheckedIcon="check-box-outline-blank"
                  title="Agree to terms and conditions"
                  
                  checked={values.check}
                  onPress={() => setFieldValue("check", !values.check)}
                />

                <FormButton
                    buttonType="outline"
                    onPress={handleSubmit}
                    title="SIGNUP"
                    buttonColor="#F57C00"
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                  />

                <ErrorMessage errorValue={errors.general} />
              </Fragment>
            )}
          </Formik>
        
          <Button
            title="Have an account? Login"
            onPress={goToLogin}
            titleStyle={{color: "#039BE5"}}
            buttonStyle={{marginTop: 0}}
            type="clear"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSignup: {
    width: '95%',
    maxWidth: 400,
    alignItems: 'center',
    marginTop: 50
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center"
  },
  buttonContainer: {
    margin: 25
  },
  checkBoxContainer: {
    backgroundColor: "#fff",
    borderColor: "#fff"
  }
});