import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SignIn, SplashScreen } from './pages'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { FlashCard } from './components/molecules';
import { FlashCardProvider } from './contexts/flashCardContext';

const App = () => {
    const [flashCardData, setFlashCardData] = useState({})

    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            
            <FlashCardProvider value={{data: flashCardData, setData: setFlashCardData}}>
                <NavigationContainer>
                    <Router/>
                </NavigationContainer>
            </FlashCardProvider>

            <FlashCard data={flashCardData} setData={setFlashCardData}/>
        </>
    )
}

export default App
