import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import {fonts, colors} from '../constants/index';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-gesture-handler';
import {addOrRemoveCart} from "../redux/actions"

export default function CameraScreen() {
  /* 
  const [items, setItems] = useState([])
const [camera, setCamera] = useState(false)


  console.log("cart",cartItems)

const handleAddData = (id)=>{
 dispatch(addToCart(id))
}
 */

  const dispatch = useDispatch();

  const [barcode, setBarcode] = useState('');

  const ref = useRef();

  const handleSetBarcode = data => {
    setBarcode(data);
  };

const cartItems = useSelector(state => state.cart)

const handleAddCart = item => dispatch(addOrRemoveCart({item,cartItems,status:true}));

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

  {/* <TouchableOpacity onPress={() => setCamera(!camera)}>
        <Text style={(styles.text, {color: colors.dark_sea_green})}>
          Kamera
        </Text>
      </TouchableOpacity> 
  */}
      <Switch />

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
        <TouchableOpacity onPress={() => handleAddCart(barcode)}>
          <Text style={(styles.text, {color: colors.dark_sea_green})}>
            Ürünü Sepete Ekle
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    padding: 10,
    height: 200,
    width: 90,
    margin: 15,
    alignSelf: 'center',
  },
  text: {
    fontSize: fonts.f15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.dark_salmon,
    margin: 5,
    padding: 2,
  },
  touchableContainer: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.dark_sea_green,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    marginTop: 15,
  },
  cartContainer: {
    borderWidth: 1,
    borderColor: colors.dark_sea_green,
    borderRadius: 4,
    padding: 5,
    width: 300,
    minHeight: 50,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
});
