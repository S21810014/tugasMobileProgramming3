import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { IconHome, IconHomeNormal, IconProfile, IconProfileNormal } from '../../assets'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeCashOnBank, HomeCashOnHand, HomeMain, NotImplemented } from '..'

const mapping = {
    IconHome: <IconHome/>,
    IconHomeNormal: <IconHomeNormal/>,
    IconProfile: <IconProfile/>,
    IconProfileNormal: <IconProfileNormal/>
}

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeMain" 
                component={HomeMain} 
                options={{headerShown: false}}/>
            <HomeStack.Screen 
                name="HomeCashOnBank" 
                component={HomeCashOnBank} 
                options={{headerShown: false}}/>
            <HomeStack.Screen
                name="HomeCashOnHand" 
                component={HomeCashOnHand} 
                options={{headerShown: false}}/>
        </HomeStack.Navigator>
    )
}

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let chosenIcon;
                    
                    //we knew the names of the icon were 'Icon<PageName><Normal>'
                    //therefore we can use string formatting to get rid of switch
                    //statements or conditional if statements.
                    chosenIcon = mapping[`Icon${route.name}${focused ? '' : 'Normal'}`]

                    return chosenIcon
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    elevation: 0
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator}/>
            <Tab.Screen name="Profile" component={NotImplemented}/>
        </Tab.Navigator>
    )
}

export default Home