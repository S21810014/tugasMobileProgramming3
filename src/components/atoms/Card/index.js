import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})

export default Card
