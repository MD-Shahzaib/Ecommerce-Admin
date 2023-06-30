import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, type }) => {
    return (
        <View style={styles.Container}>
            <TextInput
                placeholder={placeholder}
                keyboardType={type ? type : 'default'}
            />
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    Container: {
        width: Dimensions.get('window').width - 50,
        alignSelf: 'center',
        height: 40,
        borderWidth: 2,
        borderRadius: 15,
        marginTop: 20,
    }
})