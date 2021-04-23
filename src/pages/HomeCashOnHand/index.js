import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { Gap, Button } from '../../components/atoms'
import { Header, LabeledInput } from '../../components/molecules'

const HomeCashOnHand = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header canGoBack title="Cash On Hand" navigation={navigation}/>

            <ScrollView>
                <Gap height={20}/>
                <View style={[styles.card, {flex: 1.75}]}>
                    <Text>Balance:</Text>
                    <Text>Rp. 99.999.999</Text>
                    <Gap height={8}/>
                    <LabeledInput label="Description" placeholder="Add the description"/>
                    <Gap height={8}/>
                    <LabeledInput label="Description" placeholder="Debit / Credit"/>
                    <Gap height={20}/>
                    <View style={{height: 50}}>
                        <Button label="Save" bgColor="#02CF8E"/>
                    </View>
                </View>

                <Gap height={20}/>
                <View style={styles.card}>
                    <Text>Last 3 Transactions</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FAFAFC',
        flex: 1,
    },
    font: {
        fontFamily: "Poppins-Medium"
    },
    fontRegular: {
        fontFamily: "Poppins-Regular"
    },
    fontSemiBold: {
        fontFamily: "Poppins-SemiBold"
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        padding: 25
    },
})

export default HomeCashOnHand
