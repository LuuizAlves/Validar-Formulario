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
    <Input
        {...rest}
        leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
        leftIconContainerStyle={styles.iconStyle}
        placeholderTextColor="grey"
        name={name}
        value={value}
        placeholder={placeholder}
        containerStyle={styles.container}
    />
)

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        maxWidth: 400,
        width: '100%',
        height: 60,
    },
    iconStyle: {
        marginRight: 10
    },
    inputStyle: {
        width: '100%',
        maxWidth: 300,
        height: 60,
        borderWidth: 2, 
        borderRadius: 10
    }
})

export default FormInput