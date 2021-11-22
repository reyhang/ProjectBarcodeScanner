import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { colors } from '../../constants'


const TabBarIcon = ({name,color}) => {

    return <Icon name={name} color={color} size={23} />
}

export const PlusIcon = ({name,onPress}) => {

    return <Icon name={name} color={colors.dark_salmon} size={25} onPress={onPress} />
}

export default TabBarIcon;