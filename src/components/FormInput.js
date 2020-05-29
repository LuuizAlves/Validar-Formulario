import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  ...rest
}) => (
    <View style={styles.container}>
        <Input
            {...rest}
            leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
            leftIconContainerStyle={styles.iconStyle}
            placeholderTextColor="grey"
            name={name}
            value={value}
            placeholder={placeholder}
            style={{marginBottom: 0}}
        />
    </View> 
)

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: '100%',
        maxWidth: 300,
    },
    iconStyle: {
        marginRight: 10
    },
})

export default FormInput