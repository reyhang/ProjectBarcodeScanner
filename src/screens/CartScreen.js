import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {useDispatch, useSelector} from 'react-redux';
import IonIcon, { MatIcon} from '../components/Icons';
import {colors} from '../constants';
import { addOrRemoveCart } from '../redux/actions';

export default function CartScreen() {
  
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart);

/*   function Seperator() {
    return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9'}} />;
  } */


  const handleRemoveData = item => dispatch(addOrRemoveCart({item,cartItems,status:false}))

  return (
    <View style={styles.container}>
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
            <SafeAreaView style={styles.cart}>
              <View style={styles.cart2}>
       
              

                <View>
                  <Text style={styles.cartText}>{item.title}</Text>
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.cartText}>{item.count}</Text>
                </View>
                <View style={styles.touchable}>
                  <TouchableOpacity
                    onPress={() => handleRemoveData(item.title)}>
                    <IonIcon
                      name="trash-outline"
                      size={18}
                      color={colors.dark_salmon}
                    />
                  </TouchableOpacity>

              </View></View>
            </SafeAreaView>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noCart: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin:15,
    padding:75,
    borderWidth:1,
    borderColor:colors.dark_sea_green,
    borderRadius:7,

  },
  cart:{
    flex:1,
    borderWidth:1.5,
    borderRadius:15,
    padding:5,
    margin:10,
    marginVertical:7,
    alignSelf:"center",
    width:350,
    height:100

  },
  cart2:{
    borderRightWidth:1.5,
    borderRadius:1,
    marginRight:75,
    height:50,
    

  },
  countContainer: {
   
  },
  touchable:{

    
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
  cartText: {
   
  },

});
