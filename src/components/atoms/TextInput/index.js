//mostly taken from older work
//https://github.com/S21810014/tugasMobileProgramming2/blob/main/src/components/atoms/TextInput/index.js
import React, { useState } from 'react'
import { TextInput as Input, StyleSheet} from 'react-native'

const TextInput = ({placeholder, value, setValue, validation, filter, isPassword}) => {
    const [isValid, setIsValid] = useState('')

    const onChangeHandler = ({nativeEvent: {text: e}}) => {
        if(validation == undefined) validation = e => ''
        if(filter == undefined) filter = e => e
        
        setIsValid(validation(e))
        const filteredText = filter(e)
        setValue(filteredText)
    }

    const textInputBorderColor = isValid ? {borderColor: 'red'} : {}

    const textInputStyles = {
        ...styles.inputField,
        ...textInputBorderColor
    }

    return (
        <Input  style={textInputStyles}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                secureTextEntry={isPassword}
        />
    )
}

const styles = StyleSheet.create({
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: "Poppins-Regular",
        fontSize: 14
    }
})

export default TextInput
