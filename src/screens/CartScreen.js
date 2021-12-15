import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Center} from '@builderx/utils';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import styles from './Styles/CartStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {getCart, createCart} from '../redux/actions';
import { MatIcon } from '../components/Icons';
import { colors } from '../constants';

export default function CartScreen({navigation}) {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false)


  const cart = useSelector(state => state.cart);

  const getCarts = () => dispatch(getCart());

  const incDecProduct = (id,status) => {

    let param = status ? "increment" : "decrement"

    setLoading(true)

    const response =  axios.post(`http://10.0.2.2:3000/cart/${param}/${id}`)
    .then(res => {
      setLoading(false) 
      getCarts();
    })
    .catch(e => console.log(e))
    

    
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCarts();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        {cart?.id ? cart.itemCount > 0 ?
        <FlatList
        data={cart.items}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Center vertical>
              <View
                gradientImage="Gradient_oQwIoTW.png"
                style={styles.rect}></View>
            </Center>
            <View style={styles.cardBody}>
              <Image
                source={{ uri:item.productId.imageUrl
                }}
                style={styles.image}></Image>

              <View style={styles.bodyContent}>
                <Text style={styles.urun}>{item.productId.title}</Text>
                <Text style={styles.urunFiyati}>{item.productId.price}$</Text>
              </View>
            </View>
            <View style={styles.undefined}></View>
            <IoniconsIcon
              name="ios-add-circle"
              style={styles.icon}
              onPress={() => incDecProduct(item.id,true)}
            />
            <IoniconsIcon
              name="ios-remove-circle"
              style={styles.icon2}
              onPress={() => incDecProduct(item.id,false)}
            />
            <Text style={styles.adet}>{item.count}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
         : <View style={styles.noCart}>
          <MatIcon name="shopping" size={50} color={colors.light_grey} />
          <Text>Sepetinizde Ürün Bulunmamaktadır.</Text>
        </View> : <Text>Sepet Oluşturun..</Text>}
        
      </View>

      {/*  */}

      {/*  <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={dataSource => dataSource.id}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Center vertical>
                <View
                  gradientImage="Gradient_oQwIoTW.png"
                  style={styles.rect}></View>
              </Center>
              <View style={styles.cardBody}>
               <Image source={{uri: item.img}} style={styles.image}></Image>
                <View style={styles.bodyContent}>
                  <Text style={styles.urun}>sad</Text>
                  <Text style={styles.urunFiyati}>10$</Text>
                </View>
              </View>
              <View style={styles.undefined}></View>
              <IoniconsIcon
                name="ios-add-circle"
                style={styles.icon}
                onPress={() => handleIncrementCount(item)}
              />
              <IoniconsIcon
                name="ios-remove-circle"
                style={styles.icon2}
                onPress={() => handleDecreaseCount(item)}
              />
              <Text style={styles.adet}>12</Text>
            </View>
          )}
        /> */}
    </SafeAreaView>
  );
}
