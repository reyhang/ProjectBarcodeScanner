import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import React, { useRef, useState } from 'react'
import { RNCamera } from "react-native-camera";
import {fonts,  colors } from "./src/constants/index"


export default function App(){
  const [barcode, setBarcode] = useState('')
  const [items, setItems] = useState([])


  const ref = useRef()

  const handleSetBarcode = (data)=>{
    if(barcode !==data){
      setBarcode(data)
    }
  }

  const handleAddData = (id)=>{
    const checkitout = items.filter(res=>res===id)
    console.log(checkitout)
    if(checkitout.length==0){
      let addData=[
        ...items,
        id
      ]
      setItems(addData);
    }
  }
  

  return (
    <ScrollView>
      <Text style={styles.text}> Hoş Geldiniz ! </Text>
      <View
        style={{
          borderBottomColor: colors.gainsboro,
          borderBottomWidth: 1,
          width: 205,
          alignSelf: 'center',
        }}
      />
     <RNCamera
        style={styles.camera}
        ref={ref}
        captureAudio={false}
        onBarCodeRead={e => handleSetBarcode(e.data)}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          
      
      /> 
      <View>
        <Text style={[styles.text, {color: colors.dim_grey}]}>{barcode}</Text>
      </View>

      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={() => handleAddData(barcode)}>
          <Text style={(styles.text, {color: colors.dark_sea_green})}>
            Ürünü Sepete Ekle
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Sepetim</Text> 
      <View
        style={{
          marginBottom:15,
          borderBottomColor: colors.gainsboro,
          borderBottomWidth: 1,
          width: 205,
          alignSelf: 'center',
        }}
      />
      <View style={styles.cartContainer} >
           {items.map((res, index) => {
        const {text} = res;
        return <Text style={[styles.text,{color:colors.dim_grey}]} key={index}>{res}</Text>;
      })}
      </View>
   

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  camera:{
    flex: 1,
    padding: 10,
    height: 200,
    width: 90,
    margin: 15,
    alignSelf: 'center',
    
    
  },
  text:{
    fontSize:fonts.f15,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.dark_salmon,
    margin:5,
    padding:2
  },
  touchableContainer:{
    borderWidth:1,
    borderRadius:7,
    borderColor:colors.dark_sea_green,
    width:150,
    alignSelf:"center",
    alignItems:"center",
    padding:5,
    margin:5,
    marginTop:15
  },
  cartContainer:{
    borderWidth:1,
    borderColor:colors.dark_sea_green,
    borderRadius:4,
    padding:5,
    width:300,
    minHeight:50,
    alignSelf:"center",
    alignItems:"flex-start"

  }
})