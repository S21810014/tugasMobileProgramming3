import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button, Gap } from '../../components/atoms'
import UserBalanceContext from '../../contexts/userBalanceContext'

const HomeMain = ({navigation}) => {
    const userBalanceData = useContext(UserBalanceContext)

    const data = userBalanceData.data
    
    return (
        <View style={styles.page}>
            <View style={styles.topMostHeader}>
                <View style={styles.leftTitle}>
                    <Text style={[styles.font, styles.titleText]}>Money Tracker</Text>
                    <Text style={[styles.font, styles.greyText]}>Track your money</Text>
                </View>
                <View style={styles.rightProfilePic}>
                    <Image source={{uri: data.profilePic}} style={{width: '100%', height: '100%'}}/>
                </View>
            </View>
            <Gap height={20}/>
            <View style={styles.card}>
                <Text style={[styles.font]}>Your Balance</Text>
                <Text style={[styles.fontSemiBold, styles.balanceNominal]}>Rp. {data.cashOnHand + data.cashOnBank}</Text>
                <View style={styles.horizontalLine}/>
                <Gap height={20}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.fontRegular, styles.leftHandText]}>Cash on Hand</Text>
                    <Text style={[styles.fontSemiBold]}>Rp. {data.cashOnHand}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.fontRegular, styles.leftHandText]}>Cash on Bank</Text>
                    <Text style={[styles.fontSemiBold]}>Rp. {data.cashOnBank}</Text>
                </View>
            </View>
            <Gap height={20}/>
            <View style={styles.card}>
                <Text style={[styles.font]}>Add Transaction</Text>
                <Gap height={9}/>
                <View style={{height: 125}}>
                    <Button     label="Cash On Hand" 
                                bgColor="#02CF8E" 
                                onPress={() => navigation.navigate("HomeCashOnHand")}/>
                    <Gap height={20}/>
                    <Button     label="Cash On Bank"    
                                bgColor="#02CF8E"
                                onPress={() => navigation.navigate("HomeCashOnBank")}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FAFAFC',
        flex: 1,
    },
    leftTitle: {
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
    titleText: {
        fontSize: 22,
    },
    greyText: {
        fontFamily: "Poppins-Regular",
        color: 'grey',
        marginTop: -8
    },
    topMostHeader: {
        backgroundColor: 'white',
        height: 108,
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 15,
        flexDirection: 'row'
    },
    rightProfilePic: {
        overflow: 'hidden',
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: 'grey'
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        padding: 25
    },
    balanceNominal: {
        fontSize: 28,
        alignSelf: 'center',
        paddingVertical: 10,
        paddingTop: 4,
    },
    leftHandText: {
        width: 125
    },
    horizontalLine: {
        height: 1,
        backgroundColor: 'black'
    },
})

export default HomeMain