import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

const ErrorMessage = ({errorValue}) => (
  <View style={styles.container}>
    <Text style={styles.errorText} > {errorValue} </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    alignSelf: 'flex-start'
  },
  errorText: {
    color: 'red'
  }
})

export default ErrorMessage