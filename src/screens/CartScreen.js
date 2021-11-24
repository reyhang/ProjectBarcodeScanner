import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_FROM_CART} from '../redux/actionTypes';
import TabBarIcon, { CartIcon } from '../components/Icons';
import { colors } from '../constants';

export default function CartScreen() {

 
  const cartItems = useSelector(state => state.cart);

  
  function Seperator() {
    return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9'}} />;
  }

  return (
    <View style={styles.container}>      

      {cartItems.length === 0 ? (
        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CartIcon size={50} color={colors.light_grey} />
          <Text>Sepetinizde Ürün Bulunmamaktadır.</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => Seperator()}
          renderItem={({item}) => (
            <View style={styles.bookItemContainer}>

                <Text style={styles.bookTitle}> {item} </Text>
               

            
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffd2c9',
    fontSize: 45,
    margin: 15,
    textAlign: 'center',
    letterSpacing: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin:1
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
  authorText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
  },
  button: {
    backgroundColor: '#a5285144',
    fontSize: 15,
    height: 25,
    width: 100,
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '300',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
});