import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        //setTimeout(() => navigation.navigate("SignIn"), 3000)
        setTimeout(() => navigation.replace("SignIn"), 3000)
    }, [])

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
