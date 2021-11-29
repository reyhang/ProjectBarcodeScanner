import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { colors } from '../../constants'


export default function IonIcon  ({name,color,size,style})  {

    return <Icon name={name} color={color} size={size} style={style} />
}

const PlusIcon = ({name,onPress}) => {

    return <Icon name={name} color={colors.dark_salmon} size={25} onPress={onPress} />
}

const RemoveIcon = ({name,color}) => {

    return <Icon name={name} color={color} size={20}  />

}

const MatIcon = ({name,size,color}) => {
    return <MaterialIcon name={name} color={color} size={size} />
}

export {PlusIcon,RemoveIcon,MatIcon}