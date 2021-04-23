import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { ArrowBack } from '../../../assets'

const Header = ({title, canGoBack}) => {
    return (
        <View style={styles.header}>
            {
                canGoBack &&    <TouchableOpacity style={styles.arrow}>
                                    <ArrowBack />
                                </TouchableOpacity>
            }
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 108,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium'
    },
    arrow: {
        paddingRight: 25
    }
})

export default Header
