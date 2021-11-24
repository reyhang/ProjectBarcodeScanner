import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { colors } from '../../constants'


export default function TabBarIcon  ({name,color})  {

    return <Icon name={name} color={color} size={23} />
}

const PlusIcon = ({name,onPress}) => {

    return <Icon name={name} color={colors.dark_salmon} size={25} onPress={onPress} />
}

const RemoveIcon = ({name,color}) => {

    return <Icon name={name} color={color} size={20}  />

}

const CartIcon = ({size,color}) => {
    return <MaterialIcon name="shopping" color={color} size={size} />
}

export {PlusIcon,RemoveIcon,CartIcon}