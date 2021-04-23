import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { Gap, Button, Card } from '../../components/atoms'
import { Header, LabeledInput } from '../../components/molecules'
import numeral from 'numeral'

const HomeCashOnBank = ({navigation}) => {
    const testData = [
        {
            date: '17 April 2020',
            desc: 'Water, Food',
            nominal: 300000,
            type: 'withdraw'
        },
        {
            date: '18 April 2020',
            desc: 'Office supplies',
            nominal: 300000,
            type: 'withdraw'
        },
        {
            date: '19 April 2020',
            desc: 'Top Up',
            nominal: 300000,
            type: 'store'
        },
    ]
    return (
        <View style={styles.page}>
            <Header canGoBack title="Cash On Bank" navigation={navigation}/>

            <ScrollView>
                <Gap height={20}/>
                <View style={[styles.card, {flex: 1.75}]}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.fontRegular, {marginRight: 10}]}>Balance:</Text>
                        <Text style={[styles.fontSemiBold]}>Rp. 99.999.999</Text>
                    </View>
                    <Gap height={8}/>
                    <LabeledInput label="Description" placeholder="Add the description"/>
                    <Gap height={8}/>
                    <LabeledInput label="Type" placeholder="Debit / Credit"/>
                    <Gap height={20}/>
                    <View style={{height: 50}}>
                        <Button label="Save" bgColor="#02CF8E"/>
                    </View>
                </View>

                <Gap height={20}/>
                <View style={styles.card}>
                    <Text style={[styles.fontSemiBold, {fontSize: 16}]}>Last 3 Transactions</Text>
                    {
                        testData.map((el, idx) =>
                            <Card key={idx} style={styles.cardStyle}>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.fontRegular, styles.greyFont]}>{el.date}</Text>
                                    <Text style={styles.font}>{el.desc}</Text>
                                </View>
                                <Text style={[
                                    styles.fontSemiBold,
                                    {
                                        color: el.type === "withdraw" ? 'red' : 'green'
                                    }
                                ]}>
                                    {`${el.type === "withdraw" ? '-' : '+'}Rp. ${numeral(el.nominal).format('0,0').replace(',', '.')}`}
                                </Text>
                            </Card>
                        )
                    }
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
    greyFont: {
        color: 'grey'
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        padding: 25
    },
    cardStyle: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    }
})

export default HomeCashOnBank
