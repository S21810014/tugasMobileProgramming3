import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { IconHome, IconHomeNormal, IconProfile, IconProfileNormal } from '../../assets'

const mapping = {
    IconHome: <IconHome/>,
    IconHomeNormal: <IconHomeNormal/>,
    IconProfile: <IconProfile/>,
    IconProfileNormal: <IconProfileNormal/>
}

const Tab = createBottomTabNavigator()

const Tes1 = () => {
    return (
        <View><Text>testing1</Text></View>
    )
}

const Tes2 = () => {
    return (
        <View><Text>testing2</Text></View>
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
            <Tab.Screen name="Home" component={Tes1}/>
            <Tab.Screen name="Profile" component={Tes2}/>
        </Tab.Navigator>
    )
}

export default Home
