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
import IonIcon, { MatIcon} from '../components/Icons';
import {colors} from '../constants';

export default function CartScreen() {
  
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart);

  const removeFromCart = payload => {
    dispatch({type: REMOVE_FROM_CART, payload});
  };


  function Seperator() {
    return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9'}} />;
  }

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.cart}>
          <MatIcon name="shopping" size={50} color={colors.light_grey} />
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
              <Text style={styles.bookTitle}>{item}
              </Text>
              <View style={styles.touchable} >
                <TouchableOpacity  onPress={() => removeFromCart(item)}>
                  <IonIcon  name="trash-outline" size={18} color={colors.dark_salmon} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin:15,
    padding:75,
    borderWidth:1,
    borderColor:colors.dark_sea_green,
    borderRadius:7,

  },
  touchable:{
    marginTop:3,
    marginLeft:350,
    position: "absolute",
    
  },
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
    margin: 1,
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },

});
