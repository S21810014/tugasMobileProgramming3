import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SignIn, SplashScreen } from './pages'

const App = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            <SplashScreen/>
        </>
    )
}

export default App
