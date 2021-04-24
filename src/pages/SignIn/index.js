import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Header, LabeledInput } from '../../components/molecules'
import { Button, Gap, TextInput } from '../../components/atoms'
import firestore from '@react-native-firebase/firestore'
import FlashCardContext from '../../contexts/flashCardContext'
import UserBalanceContext from '../../contexts/userBalanceContext'

const SignIn = ({navigation}) => {
    StatusBar.setBarStyle('dark-content')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const flashCard = useContext(FlashCardContext)
    const userAndBalance = useContext(UserBalanceContext)

    //https://www.w3resource.com/javascript/form/email-validation.php
    const emailValidationHandler = e => {
        if(e.length > 0)
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e))
                return ''
            else
                return 'Invalid email'
        else
            return 'Email must be filled'
    }

    const loginHandler = () => {
        firestore()
            .collection('users')
            .where('email', '==', email)
            .where('password', '==', password)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.docs.length > 0) {

                    const userID = querySnapshot.docs[0].ref //gets the userID from firebase
                    const userData = querySnapshot.docs[0].data()

                    firestore()
                        .collection('transactions')
                        .where('userId', '==', userID)
                        .get()
                        .then(e => {
                            userAndBalance.setData(prevState => ({
                                ...prevState,
                                userID: userID,
                                cashOnHand: userData.cashOnHand,
                                cashOnBank: userData.cashOnBank,
                                fullName: userData.fullName,
                                transactions: e.docs.map(el => el.data())
                            }))
                        })
                        
                    navigation.replace("Home")
                } else {
                    flashCard.setData({
                        type: 'error',
                        message: 'Email or Password Incorrect'
                    })
                }
            })
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In"/>
            <Gap height={25}/>
            <View style={styles.signInCard}>
                <LabeledInput   value={email}
                                setValue={setEmail}
                                validation={emailValidationHandler}
                                placeholder="Type your email address"
                                label="Email Address"
                />
                <Gap height={16}/>
                <LabeledInput   value={password}
                                setValue={setPassword}
                                placeholder="Type your password"
                                label="Password"
                                isPassword
                />
                <Gap height={24}/>
                <View style={{height: 112}}>
                    <Button     label="Sign In" 
                                bgColor='#02CF8E'
                                onPress={loginHandler}
                    />
                    <Gap height={12}/>
                    <Button     label="Create New Account" 
                                bgColor='#8D92A3' 
                                textColor='white'
                                onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FAFAFC',
        flex: 1
    },
    signInCard: {
        backgroundColor: 'white',
        flex: 1,
        padding: 25
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular"
    }
})

export default SignIn
