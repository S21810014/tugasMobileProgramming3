import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo } from '../../assets';

const SplashScreen = () => {
    return (
        <View style={styles.page}>
            <Logo/>
            <Text style={styles.text}>Money Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#02CF8E',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium'
    }
})

export default SplashScreen
