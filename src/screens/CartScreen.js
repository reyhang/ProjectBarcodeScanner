import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {MatIcon} from '../components/Icons';
import {colors} from '../constants';
import {addOrRemoveCart, decreaseCount, incrementCount} from '../redux/actions';
import {Center} from '@builderx/utils';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import styles from './Styles/CartStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CartScreen() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart);

  const handleRemoveData = item =>
    dispatch(addOrRemoveCart({item, cartItems, status: false}));

  const handleIncrementCount = item =>
    dispatch(incrementCount({item, cartItems}));

  const handleDecreaseCount = item =>
    dispatch(decreaseCount({item, cartItems}));

  return (
    <SafeAreaView>
      {cartItems.length === 0 ? (
        <View style={styles.noCart}>
          <MatIcon name="shopping" size={50} color={colors.light_grey} />
          <Text>Sepetinizde Ürün Bulunmamaktadır.</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Center vertical>
                <View
                  gradientImage="Gradient_oQwIoTW.png"
                  style={styles.rect}></View>
              </Center>
              <View style={styles.cardBody}>
                <Image
                  source={{uri:item.img}}
                  style={styles.image}></Image>
                <View style={styles.bodyContent}>
                  <Text style={styles.urun}>{item.title}</Text>
                  <Text style={styles.urunFiyati}>10$</Text>
                </View>
              </View>
              <View style={styles.undefined}></View>
              <IoniconsIcon
                name="ios-add-circle"
                style={styles.icon}
                onPress={() => handleIncrementCount(item)}/>
              <IoniconsIcon
                name="ios-remove-circle"
                style={styles.icon2}
                onPress={() => handleDecreaseCount(item)}
                />
              <Text style={styles.adet}>{item.count}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
