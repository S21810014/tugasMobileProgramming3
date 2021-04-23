import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from '../../atoms'

const LabeledInput = ({label, placeholder, value, setValue, validation, filter, isPassword}) => {
    return (
        <View>
            <Text style={styles.text}>{label}</Text>
            <TextInput  value={value}
                        setValue={setValue}
                        placeholder={placeholder}
                        validation={validation}
                        filter={filter}
                        isPassword={isPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
})

export default LabeledInput
