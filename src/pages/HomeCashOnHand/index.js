import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/molecules'

const HomeCashOnHand = ({navigation}) => {
    return (
        <View>
            <Header canGoBack title="Cash On Hand" navigation={navigation}/>
        </View>
    )
}

export default HomeCashOnHand
