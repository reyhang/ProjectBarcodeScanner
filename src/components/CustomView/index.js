import React, {useMemo} from 'react'
import { useState } from 'react';
import { View, Text } from 'react-native'
import { colors } from '../../constants';

export default function CustomView(props) {

const [isDark,setIsDark] = useState(false)
    
    const containerStyle = useMemo(() => {
        const styles = {
            backgroundColor: 
            isDark ? 
            colors.black : 
            colors.white,
            ...props.style}
            return styles
    },[props,isDark])



    return (
        <View style={containerStyle} >
          
                {props.children}
                
        </View>
    )
}
