import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState,useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import {fonts, colors} from '../constants/index';
import {useDispatch, useSelector} from 'react-redux';
import {Switch} from 'react-native-gesture-handler';
import {addOrRemoveCart} from "../redux/actions"
import axios from 'axios';
import { Card, Paragraph } from 'react-native-paper';

export default function CameraScreen() {
  /* 
  const [items, setItems] = useState([])


  console.log("cart",cartItems)

const handleAddData = (id)=>{
 dispatch(addToCart(id))
}
 */

const cart = useSelector(state => state.cart)


const [camera, setCamera] = useState(false)

const [items,setItems]=useState([])
const [isLoading,setLoading]=useState(false)

  const dispatch = useDispatch();

  const [barcode, setBarcode] = useState({});

  const ref = useRef();

  const handleSetBarcode = data => {
    const response = axios
      .get(`http://10.0.2.2:3000/products/barcode/${data}`)
      .then(res => {
        setBarcode(res.data);
      })
      .catch(e => console.log(e));
  };

const cartItems = useSelector(state => state.cart)

const handleAddCart = () => {

  if(!barcode || !cart.id) {
    return Alert.alert("Sepet veya Ürün yok.")
  }
  const response = axios.post(`http://10.0.2.2:3000/cart/items/${cart.id}`,{
      barcode:barcode.barcode
  })
  .then(() => Alert.alert("Response Post"))
  .catch(e => console.log(e))
}

const getProducts = async () => {
  const response = await axios.get(`http://10.0.2.2:3000/products`)
  .then(res=>res.data).catch(e=>console.log(e))
  setItems(response)
}






 useEffect(() => {
     setLoading(true)
     getProducts()
     setLoading(false)
 }, [])

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

      <Switch /> */}

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
      <Card style={{borderWidth:2,margin:20,borderColor:colors.light_blue,borderRadius:15,width:300,alignSelf:"center"}}>
          <Card.Content>
            <Card.Cover style={styles.image} source={{uri: barcode?.imageUrl}}>

            </Card.Cover>
            
            <Paragraph style={[styles.text, {color: colors.dim_grey}]}>
                        {barcode.ti8690565005163tle ? barcode.title : null}

            </Paragraph>
          </Card.Content>
          <Image  />
        <Text >
        </Text> 
        </Card>
      {/*   <Image style={styles.image} source={{uri: barcode?.imageUrl}} />
        <Text style={[styles.text, {color: colors.dim_grey}]}>
          {barcode.title ? barcode.title : null}
        </Text> */}
      </View>

      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={() => handleAddCart(barcode.barcode)}>
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
  image: {
    height: 80,
    width: 80,
    borderRadius: 3,
    marginTop:5
  },
});
