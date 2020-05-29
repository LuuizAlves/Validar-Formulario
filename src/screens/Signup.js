import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Signup(){
  const navigation = useNavigation();

  function goToLogin(){
    navigation.navigate('Login')
  }

  return(
      <View style={styles.container}>
          <Text>Signup</Text>
          <Button title='Go to Login' onPress={goToLogin} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
