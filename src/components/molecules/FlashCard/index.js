import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { CancelButton } from '../../../assets';
import { Button } from '../../atoms';


const FlashCard = ({data, setData}) => {
    let containerBackground
    let textColor = 'white'

    if(data.type === "error") {
        containerBackground = '#FD403A'
    }
    else if(data.type === "success") {
        containerBackground = '#03DC81'
        textColor = 'black'
    }

    const cancelButtonHandler = () => {
        setData({})
    }

    return (
        <View style={styles.container} pointerEvents='box-none'>
            {
                data.type &&
                <View style={[
                    styles.card,
                    {
                        backgroundColor: containerBackground
                    }
                ]}>
                    <Text style={{color: textColor, flex: 1}}>{data.message}</Text>
                    <TouchableOpacity onPress={cancelButtonHandler}>
                        <CancelButton fill={textColor}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    card: {
        padding: 15,
        paddingTop: 15 + 20,
        flexDirection:'row'
    }
})

export default FlashCard
