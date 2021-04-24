import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { Button, Gap } from '../../components/atoms'
import { Header, LabeledInput } from '../../components/molecules'
import firestore from '@react-native-firebase/firestore'
import FlashCardContext from '../../contexts/flashCardContext'

const SignUp = ({navigation}) => {
    StatusBar.setBarStyle('dark-content')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const flashCard = useContext(FlashCardContext)

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

    const RegisterButtonHandler = () => {
        if(fullName.length < 1) {
            flashCard.setData({
                type: 'error',
                message: 'Please enter your full name'
            })
            return;
        }

        const emailValidation = emailValidationHandler(email)

        if(emailValidation.length > 0) {
            flashCard.setData({
                type: 'error',
                message: emailValidation
            })
            return;
        }

        if(password.length < 1) {
            flashCard.setData({
                type: 'error',
                message: 'Please enter a password'
            })
            return;
        }

        firestore()
            .collection('users')
            .where('email', '==', email)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.docs.length > 0) {
                    flashCard.setData({
                        type: 'error',
                        message: 'An Account already registered with that email'
                    })
                } else {
                    firestore()
                        .collection('users')
                        .add({
                            fullName: fullName,
                            email: email,
                            password: password,
                        }).then(() => {
                            flashCard.setData({
                                type: 'success',
                                message: 'Account successfully registered'
                            })
                            navigation.replace("SignIn")
                        })
                }
            })
    }

    return (
        <View style={styles.page}>
            <Header canGoBack title="Sign Up" navigation={navigation}/>
            <Gap height={25}/>
            <View style={styles.signUpCard}>
                <TouchableOpacity style={styles.addPhotoContainer}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}>
                            <Text style={styles.innerCircleText}> Add </Text>
                            <Text style={styles.innerCircleText}> Photo </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <LabeledInput   value={fullName}
                                setValue={setFullName}
                                validation={e => e.length > 0 ? '' : 'Empty Input'}
                                placeholder="Type your full name"
                                label="Full Name"
                />
                <Gap height={16}/>
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
                                validation={e => e.length > 0 ? '' : 'Empty Input'}
                                label="Password"
                                isPassword
                />
                <Gap height={24}/>
                <View style={{height: 50}}>
                    <Button     label="Continue" 
                                bgColor='#02CF8E'
                                onPress={RegisterButtonHandler}
                    />
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
    signUpCard: {
        backgroundColor: 'white',
        flex: 1,
        padding: 25,
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins-Regular"
    },
    addPhotoContainer: {
        alignItems: 'center'
    },
    outerCircle: {
        borderWidth: 1, 
        height: 85, 
        width: 85, 
        borderRadius: 999, 
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        backgroundColor: '#F0F0F0', 
        height: 70, 
        width: 70, 
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircleText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: 'hsla(226, 11%, 60%, 1)'
    }
})

export default SignUp
