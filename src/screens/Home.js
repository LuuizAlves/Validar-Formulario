import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  
  function navigationExit(){
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button
        title="Logout"
        onPress={navigationExit}
        titleStyle={{
          color: 'red'
        }}
        type="clear"
      />
      
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
