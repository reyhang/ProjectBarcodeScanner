import React from 'react'
import { View, Text } from 'react-native'
import { fonts } from '../constants'

export default function HomeScreen() {
    return (
        <View style={{alignSelf:"center"}}>
            <Text style={{fontWeight:"bold",margin:50,fontSize:fonts.f21}} >Hoş Geldiniz!</Text>
        </View>
    )
}
