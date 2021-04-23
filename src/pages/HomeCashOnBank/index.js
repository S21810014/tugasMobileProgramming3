import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../components/molecules'

const HomeCashOnBank = ({navigation}) => {
    return (
        <View>
            <Header canGoBack title="Cash On Bank" navigation={navigation}/>
        </View>
    )
}

export default HomeCashOnBank
