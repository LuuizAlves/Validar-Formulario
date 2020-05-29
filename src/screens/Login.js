import React, {useState, Fragment} from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, View, TextInput, SafeAreaView, Text} from 'react-native'
import { Button } from 'react-native-elements'
import { Formik } from 'formik'
import * as yup from 'yup'

import FormInput from '../components/FormInput'
import ButtomType from '../components/ButtonType'
import ErrorMessage from '../components/ErrorMessage'
import FormButton from '../components/FormButton'

const validationSchema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a register email'),
  password: yup.string()
    .label('Password')
    .required()
    .min(6, 'Password must have at least  4 characters')
})

export default function Login(){
  //const [ email, setEmail ] = useState('');
  //const [ password, setPassword ] = useState('');

  const navigation = useNavigation();

  function navigationSignup(){
    navigation.navigate('Signup')
  }

  async function OnHome(values){
    const { email, password } = values;
    try {
      if (email.length > 0 && password.length > 0) {
        setTimeout(() => {
          navigation.navigate('Home')
        }, 3000)
        
      }
    } catch (error) {
      alert(error)
    }
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.containerLogin}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
              OnHome(values)
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
              <Fragment>
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder="Enter email"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  iconName="ios-mail"
                  iconColor="#2C384A"
                  onBlur={handleBlur("email")}
                />
                <ErrorMessage errorValue={touched.email && errors.email } />

                <FormInput
                  name="password"
                  value={values.password}
                  placeholder="Enter password"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  iconName="ios-lock"
                  iconColor="#2C384A"
                  onBlur={handleBlur("password")}
                />
                <ErrorMessage errorValue={touched.password && errors.password} />

                <FormButton
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </Fragment>
            )}
          </Formik>

          <Button
            title="Don't have an account? Sign Up"
            onPress={navigationSignup}
            titleStyle={{
              color: '#F57C00'
            }}
            type="clear"
          />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300

  },
  buttonContainer: {
    margin: 25
  },
  buttomTest: {
    width: '100%',
    maxWidth: 300
  }
})