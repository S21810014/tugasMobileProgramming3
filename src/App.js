import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { FlashCard } from './components/molecules';
import { FlashCardProvider } from './contexts/flashCardContext';
import { UserBalanceProvider } from './contexts/userBalanceContext';

const App = () => {
    const [flashCardData, setFlashCardData] = useState({})
    const [userAndBalanceData, setUserAndBalanceData] = useState({})

    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            
            <FlashCardProvider value={{data: flashCardData, setData: setFlashCardData}}>
                <UserBalanceProvider value={{data: userAndBalanceData, setData: setUserAndBalanceData}}>
                    <NavigationContainer>
                        <Router/>
                    </NavigationContainer>
                </UserBalanceProvider>
            </FlashCardProvider>

            <FlashCard data={flashCardData} setData={setFlashCardData}/>
        </>
    )
}

export default App
