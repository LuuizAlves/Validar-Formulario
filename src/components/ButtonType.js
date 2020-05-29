import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const ButtomType = ({text, color, disabled, ...rest}) => {
    const colorDefault = color
    if(!disabled){
        color = colorDefault
    }else{
        color = "#DDD"
    }
    return(
        <TouchableOpacity 
        {...rest}
        style={{
            margin: 15,
            height: '100%',
            width: '100%',
            maxHeight: 60,
            maxWidth: 270,
            alignSelf: 'center',
            backgroundColor: color,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'}}
        >
            <Text style={styles.text}> {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FFF'
    }
})


export default ButtomType