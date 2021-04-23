import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SignIn, SplashScreen } from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            <NavigationContainer>
                <Router/>
            </NavigationContainer>
        </>
    )
}

export default App
